import React, { useEffect, useState } from "react";

export default function Dataset() {

  // ================= DATASET COUNTS =================
  const datasetStats = {
    Adrenal: { train: 1188, test: 298, val: 98 },
    Vessel: { train: 1335, test: 382, val: 191 }
  };

  // ================= SAMPLE FILE STATES =================
 const [adrenalHealthy, setAdrenalHealthy] = useState([]);
const [adrenalDiseased, setAdrenalDiseased] = useState([]);
const [vesselHealthy, setVesselHealthy] = useState([]);
const [vesselDiseased, setVesselDiseased] = useState([]);


  // ================= FETCH FROM BACKEND =================
  useEffect(() => {
    fetch("http://localhost:5000/list_samples")
      .then(res => res.json())
      .then(data => {
  setAdrenalHealthy(data.adrenal.healthy);
  setAdrenalDiseased(data.adrenal.diseased);
  setVesselHealthy(data.vessel.healthy);
  setVesselDiseased(data.vessel.diseased);
});

  }, []);

  // ================= DOWNLOAD =================
  const downloadSample = (category, file) => {
    window.open(
      `http://localhost:5000/download_sample/${category}/${file}`,
      "_blank"
    );
  };

  // ================= STYLES =================
  const styles = {
    page: {
      padding: "40px 20px",
      textAlign: "center",
      minHeight: "80vh"
    },
    title: {
      fontSize: "2.5rem",
      color: "#38bdf8",
      marginBottom: "20px"
    },
    desc: {
      maxWidth: "800px",
      margin: "0 auto 50px",
      color: "#e5e7eb"
    },
    statsRow: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap"
    },
    card: {
      minWidth: "300px",
      maxWidth: "450px"
    },
    cardTitle: {
      color: "#fff",
      borderBottom: "2px solid #aaa",
      paddingBottom: "10px"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "15px"
    },
    metric: {
      padding: "15px",
      borderRadius: "10px",
      color: "#fff",
      fontWeight: "bold"
    },

    // ===== SAMPLE DATA =====
    sampleSection: {
      marginTop: "80px",
      maxWidth: "900px",
      marginInline: "auto"
    },
    sampleTitle: {
      fontSize: "2.2rem",
      color: "#38bdf8",
      marginBottom: "30px"
    },
    sampleGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    },
    sampleBox: {
  padding: "25px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.06)",
  maxHeight: "350px",
  overflowY: "auto"
},
    row: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      color: "#e5e7eb"
    },
    btn: {
      padding: "6px 14px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      color: "#fff"
    }
  };

  return (
  <div style={styles.page}>
    <h1 style={styles.title}>Dataset Overview</h1>

    <p style={styles.desc}>
      Datasets are obtained from <b>Zenodo</b>.  
      Used datasets are <b>Adrenalmnist3d_64</b> and <b>Vesselmnist3d_64</b>.
    </p>

    {/* ================= DATASET STATS ================= */}
    <div style={styles.statsRow}>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Adrenalmnist3d_64</h2>
        <div style={styles.grid}>
          <div style={{ ...styles.metric, background: "#22c55e" }}>
            TRAIN<br />{datasetStats.Adrenal.train}
          </div>
          <div style={{ ...styles.metric, background: "#ef4444" }}>
            TEST<br />{datasetStats.Adrenal.test}
          </div>
          <div style={{ ...styles.metric, background: "#f59e0b" }}>
            VAL<br />{datasetStats.Adrenal.val}
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Vesselmnist3d_64</h2>
        <div style={styles.grid}>
          <div style={{ ...styles.metric, background: "#22c55e" }}>
            TRAIN<br />{datasetStats.Vessel.train}
          </div>
          <div style={{ ...styles.metric, background: "#ef4444" }}>
            TEST<br />{datasetStats.Vessel.test}
          </div>
          <div style={{ ...styles.metric, background: "#f59e0b" }}>
            VAL<br />{datasetStats.Vessel.val}
          </div>
        </div>
      </div>
    </div>

    {/* ================= SAMPLE DATA ================= */}
    <div style={styles.sampleSection}>

      {/* ===== ADRENAL ===== */}
      <h2 style={styles.sampleTitle}>Adrenal Samples</h2>

      <div style={styles.sampleGrid}>
        {/* Adrenal Healthy */}
        <div style={styles.sampleBox}>
          <h3 style={{ color: "#22c55e" }}>
            Healthy ({adrenalHealthy.length})
          </h3>

          {adrenalHealthy.map(f => (
            <div key={f} style={styles.row}>
              <span style={{ fontFamily: "monospace" }}>{f}</span>
              <button
                style={{ ...styles.btn, background: "#22c55e" }}
                onClick={() => downloadSample("adrenal_healthy", f)}
              >
                Download
              </button>
            </div>
          ))}
        </div>

        {/* Adrenal Diseased */}
        <div style={styles.sampleBox}>
          <h3 style={{ color: "#ef4444" }}>
            Diseased ({adrenalDiseased.length})
          </h3>

          {adrenalDiseased.map(f => (
            <div key={f} style={styles.row}>
              <span style={{ fontFamily: "monospace" }}>{f}</span>
              <button
                style={{ ...styles.btn, background: "#ef4444" }}
                onClick={() => downloadSample("adrenal_diseased", f)}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== VESSEL ===== */}
      <h2 style={{ ...styles.sampleTitle, marginTop: "60px" }}>
        Vessel Samples
      </h2>

      <div style={styles.sampleGrid}>
        {/* Vessel Healthy */}
        <div style={styles.sampleBox}>
          <h3 style={{ color: "#22c55e" }}>
            Healthy ({vesselHealthy.length})
          </h3>

          {vesselHealthy.map(f => (
            <div key={f} style={styles.row}>
              <span style={{ fontFamily: "monospace" }}>{f}</span>
              <button
                style={{ ...styles.btn, background: "#22c55e" }}
                onClick={() => downloadSample("vessel_healthy", f)}
              >
                Download
              </button>
            </div>
          ))}
        </div>

        {/* Vessel Diseased */}
        <div style={styles.sampleBox}>
          <h3 style={{ color: "#ef4444" }}>
            Diseased ({vesselDiseased.length})
          </h3>

          {vesselDiseased.map(f => (
            <div key={f} style={styles.row}>
              <span style={{ fontFamily: "monospace" }}>{f}</span>
              <button
                style={{ ...styles.btn, background: "#ef4444" }}
                onClick={() => downloadSample("vessel_diseased", f)}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);
}
