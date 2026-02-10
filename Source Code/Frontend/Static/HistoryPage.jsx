import { useEffect, useState } from "react";
import "./history.css";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("predictionHistory");
    if (stored) {
      const parsed = JSON.parse(stored);
      // latest on top
      setHistory(parsed.slice().reverse());
    }
  }, []);

  return (
    <div className="history-page">
      <h2 className="history-title">Prediction History (Last 30)</h2>

      {history.length === 0 ? (
        <p className="empty-text">No predictions yet</p>
      ) : (
        <div className="history-list">
          {/* ===== HEADER ROW ===== */}
          <div className="history-header">
            <span>File Name</span>
            <span>Dataset</span>
            <span>Prediction</span>
            <span>Time</span>
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="history-card">
              {/* FILE NAME */}
              <div className="file-name">{item.fileName}</div>

              {/* DATASET */}
              <div
                className={`dataset ${
                  item.dataset === "Vessel"
                    ? "vessel"
                    : item.dataset === "Adrenal"
                    ? "adrenal"
                    : "invalid"
                }`}
              >
                {item.dataset}
              </div>

              {/* PREDICTION */}
              <div
                className={`prediction ${
                  item.prediction === "Healthy"
                    ? "healthy"
                    : item.prediction === "Diseased"
                    ? "diseased"
                    : "invalid"
                }`}
              >
                {item.prediction}
              </div>

              {/* TIME */}
              <div className="time">{item.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
