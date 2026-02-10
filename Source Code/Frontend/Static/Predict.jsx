import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./predict.css";
import FileCard from "./FileCard";

export default function Predict() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="predict-page">
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <h2 className="page-title">MedVision 3D Analysis</h2>
        <button
          className="history-btn"
          onClick={() => navigate("/history")}
        >
          View History
        </button>
      </div>

      {/* ===== FILE UPLOAD SECTION ===== */}
      <div className="file-upload-wrapper">
        {/* MULTIPLE FILE UPLOAD */}
        <label className="upload-label">
          Upload Files (.npz)
          <input
            type="file"
            multiple
            accept=".npz"
            onChange={(e) => {
              const selected = Array.from(e.target.files);
              setFiles((prev) => [...prev, ...selected]);
            }}
            hidden
          />
        </label>

        {/* FOLDER UPLOAD */}
        <label className="upload-label">
  Upload Folder
  <input
    type="file"
    multiple
    webkitdirectory=""
    directory=""
    mozdirectory=""
    onChange={(e) => {
      const allFiles = Array.from(e.target.files);
      const npzFiles = allFiles.filter((f) =>
        f.name.toLowerCase().endsWith(".npz")
      );
      setFiles((prev) => [...prev, ...npzFiles]);
    }}
    hidden
  />
</label>


        <p
          style={{
            marginTop: "12px",
            color: "#94a3b8",
            fontSize: "0.9rem",
          }}
        >
          Supports multiple .npz files and full folder upload
        </p>
      </div>

      {/* ===== FILE GRID ===== */}
      <div className="grid-container">
        {files.length > 0 ? (
          files.map((file, idx) => (
            <FileCard key={idx} file={file} />
          ))
        ) : (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              marginTop: "50px",
              color: "#475569",
            }}
          >
            <h3>
              No files selected. Upload medical scans to begin analysis.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
