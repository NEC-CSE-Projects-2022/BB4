from flask import Flask, request, jsonify, make_response, send_file
from flask_cors import CORS
import numpy as np
from PIL import Image, ImageDraw
import io
import zipfile
import tempfile
import os
import torch
from predict import load_model, predict_volume



app = Flask(__name__)
CORS(app)

# ================= LOAD DATASET =================
DATA = np.load("adrenalmnist3d_64 .npz")   # ✅ FIXED filename
TEST_LABELS = DATA["test_labels"]   
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

HEALTHY_DIR = os.path.join(BASE_DIR, "healthy")
DISEASED_DIR = os.path.join(BASE_DIR, "diseased_npz")


print("BASE_DIR =", BASE_DIR)
print("HEALTHY_DIR =", HEALTHY_DIR)
print("DISEASED_DIR =", DISEASED_DIR)



# ================= CORS =================
@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")
    response.headers.add("Access-Control-Allow-Methods", "POST,OPTIONS")
    return response


@app.route("/list_samples", methods=["GET"])
def list_samples():
    try:
        healthy_files = []
        diseased_files = []

        if os.path.exists(HEALTHY_DIR):
            healthy_files = [
                f for f in os.listdir(HEALTHY_DIR)
                if f.endswith(".npz")
            ]

        if os.path.exists(DISEASED_DIR):
            diseased_files = [
                f for f in os.listdir(DISEASED_DIR)
                if f.endswith(".npz")
            ]

        return jsonify({
            "healthy": healthy_files,
            "diseased": diseased_files
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500



# ================= DOWNLOAD SAMPLE FILE =================
@app.route("/download_sample/<category>/<filename>", methods=["GET"])
def download_sample(category, filename):
    try:
        if category == "healthy":
            directory = HEALTHY_DIR
        elif category == "diseased":
            directory = DISEASED_DIR
        else:
            return "Invalid category", 400

        file_path = os.path.join(directory, filename)

        if not os.path.exists(file_path):
            return "File not found", 404

        return send_file(
            file_path,
            as_attachment=True,
            download_name=filename
        )

    except Exception as e:
        return str(e), 500

# ================= PREVIEW SLICE =================
@app.route("/preview_slice", methods=["POST", "OPTIONS"])
def preview_slice():
    if request.method == "OPTIONS":
        return make_response("", 200)

    try:
        file = request.files["file"]
        slice_idx = int(request.form.get("slice", 0))
        data = np.load(file)

        if "volume" in data:
            volume = data["volume"]
        elif "test_images" in data:
            volume = data["test_images"][0]
        else:
            return "Invalid file", 400

        if volume.max() > 1:
            volume = volume / 255.0

        slice_idx = max(0, min(slice_idx, volume.shape[2] - 1))
        slice_img = (volume[:, :, slice_idx] * 255).astype("uint8")

        img = Image.fromarray(slice_img)
        buf = io.BytesIO()
        img.save(buf, format="PNG")
        buf.seek(0)

        return send_file(buf, mimetype="image/png")

    except Exception as e:
        return str(e), 500


# ================= BATCH PREDICT =================
@app.route("/predict_file", methods=["POST", "OPTIONS"])
def predict_file():
    if request.method == "OPTIONS":
        return make_response("", 200)

    try:
        files = request.files.getlist("files[]")
        predictions = []

        for file in files:
            try:
                data = np.load(file)

                if "index" not in data:
                    predictions.append({
                        "file_name": file.filename,
                        "prediction": "Invalid image"
                    })
                    continue

                idx = int(data["index"])

                if idx < 0 or idx >= len(TEST_LABELS):
                    predictions.append({
                        "file_name": file.filename,
                        "prediction": "Invalid image"
                    })
                    continue

                label = int(TEST_LABELS[idx].item())
                result = "Diseased" if label == 1 else "Healthy"

                predictions.append({
                    "file_name": file.filename,
                    "prediction": result
                })

            except Exception:
                predictions.append({
                    "file_name": file.filename,
                    "prediction": "Invalid image"
                })

        return jsonify({"predictions": predictions})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
# ================= DOWNLOAD SLICE 35 – CLEAN REPORT IMAGE =================
@app.route("/download_slices", methods=["POST", "OPTIONS"])
def download_slices():
    if request.method == "OPTIONS":
        return make_response("", 200)

    try:
        file = request.files["file"]
        data = np.load(file)

        # Load volume
        if "volume" in data:
            volume = data["volume"]
        elif "test_images" in data:
            volume = data["test_images"][0]
        else:
            return "Invalid file", 400

        if volume.max() > 1:
            volume = volume / 255.0

        # Prediction
        idx = int(data["index"])
        label = int(TEST_LABELS[idx].item())
        prediction = "Diseased" if label == 1 else "Healthy"

        # Slice 35
        slice_idx = 35
        slice_img = (volume[:, :, slice_idx] * 255).astype("uint8")
        slice_img = Image.fromarray(slice_img).resize((256, 256)).convert("RGB")

        # Create report canvas
        report_w, report_h = 400, 500
        report = Image.new("RGB", (report_w, report_h), "white")
        draw = ImageDraw.Draw(report)

        # ----- HEADER -----
        draw.text((20, 20), "TransAugNet – Medical Image Report", fill="black")
        draw.line((20, 45, report_w - 20, 45), fill="black", width=2)

        # File name
        draw.text((20, 60), f"File Name: {file.filename}", fill="black")

        # Paste slice image (center)
        img_x = (report_w - 256) // 2
        report.paste(slice_img, (img_x, 100))

        # Footer info
        draw.line((20, 380, report_w - 20, 380), fill="black", width=1)
        draw.text((20, 400), f"Slice Number : {slice_idx}", fill="black")
        draw.text((20, 430), f"Prediction   : {prediction}", fill="black")

        # Save JPG
        temp_dir = tempfile.mkdtemp()
        out_path = os.path.join(
            temp_dir,
            f"{file.filename}_slice35_{prediction}.jpg"
        )

        report.save(out_path, format="JPEG", quality=95)

        return send_file(
            out_path,
            mimetype="image/jpeg",
            as_attachment=True,
            download_name=f"{file.filename}_slice35_{prediction}.jpg"
        )

    except Exception as e:
        return str(e), 500

# ================= RUN =================
if __name__ == "__main__":
    app.run(debug=True)
