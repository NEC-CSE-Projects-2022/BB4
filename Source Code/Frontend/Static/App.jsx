import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dataset from "./pages/Dataset";
import Predict from "./pages/Predict";
import Contact from "./pages/Contact";
import HistoryPage from "./pages/HistoryPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="page-wrapper">
        <div className="page-card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<HistoryPage />} />

          </Routes>
        </div>
      </div>
    </>
  );
}
