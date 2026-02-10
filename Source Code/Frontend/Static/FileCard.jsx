import { useState, useRef, useEffect } from "react";

const PREVIEW_API = "http://localhost:5000/preview_slice";
const PREDICT_API = "http://localhost:5000/predict_file";
const DOWNLOAD_API = "http://localhost:5000/download_slices";

export default function FileCard({ file }) {
  const [slice, setSlice] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confidence, setConfidence] = useState(null);


  const intervalRef = useRef(null);

  /* ===== LOAD SLICE ===== */
  const loadSlice = async (idx) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("slice", idx);

      const res = await fetch(PREVIEW_API, {
        method: "POST",
        body: formData
      });

      const blob = await res.blob();
      setImageURL(URL.createObjectURL(blob));
    } catch (err) {
      console.error("Preview error:", err);
    }
  };

  /* ===== PLAY / PAUSE ===== */
  const togglePlay = () => {
    if (!playing) {
      intervalRef.current = setInterval(() => {
        setSlice((prev) => {
          const next = prev >= 63 ? 0 : prev + 1;
          loadSlice(next);
          return next;
        });
      }, 200);
    } else {
      clearInterval(intervalRef.current);
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  /* ===== PREDICT ===== */
  const predict = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("files[]", file);

      const res = await fetch(PREDICT_API, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      const resObj = data.predictions[0];

      const prediction = resObj.prediction;
const dataset = resObj.dataset || "Adrenal";
const conf = resObj.confidence;

setResult(`${dataset} - ${prediction}`);
setConfidence(conf);


      // ===== SAVE HISTORY =====
      const newEntry = {
        fileName: file.name,
        dataset,
        prediction,
        time: new Date().toLocaleString()
      };

      let history =
        JSON.parse(localStorage.getItem("predictionHistory")) || [];

      history.push(newEntry);
      if (history.length > 30) history.shift();

      localStorage.setItem(
        "predictionHistory",
        JSON.stringify(history)
      );

    } catch (err) {
      console.error("Prediction error:", err);
      setResult("Invalid");
    } finally {
      setLoading(false);
    }
  };

  /* ===== DOWNLOAD ===== */
  const downloadSlices = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(DOWNLOAD_API, {
      method: "POST",
      body: formData
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.name}_slice35.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  /* ===== UI ===== */
  return (
    <div className="file-card">
      <h4 title={file.name}>{file.name}</h4>

      <div className="controls">
        <button
          type="button"
          className="btn-preview"
          onClick={() => loadSlice(slice)}
        >
          Preview
        </button>

        <button
          type="button"
          className="btn-play"
          onClick={togglePlay}
        >
          {playing ? "Pause" : "Play"}
        </button>

        <button
          type="button"
          className="btn-predict"
          onClick={predict}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        <button
          type="button"
          className="btn-download"
          onClick={downloadSlices}
        >
          Download
        </button>
      </div>

      <input
        type="range"
        min="0"
        max="63"
        value={slice}
        onChange={(e) => {
          const val = Number(e.target.value);
          setSlice(val);
          loadSlice(val);
        }}
      />

      <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
        Slice: <strong>{slice}</strong>
      </p>

      {imageURL ? (
        <img
          src={imageURL}
          alt="slice preview"
          className="slice-image"
        />
      ) : (
        <div
          className="slice-image"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.2)"
          }}
        >
          <p style={{ color: "#64748b" }}>No Preview</p>
        </div>
      )}

      {result && !loading && (
  <div className="result-badge">
    Result: <strong>{result}</strong>
  </div>
)}

{confidence !== null && !loading && (
  <div className="softmax-confidence-wrapper">
    <div className="meter-label">
      <span>Confidence</span>
      <span>{confidence}%</span>
    </div>
    <progress value={confidence} max="100" style={{ width: "100%" }} />
    <div className="reliability-tag">High Reliability</div>
  </div>
)}


      
    </div>
  );
}
