import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>TransAugNet</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dataset">Dataset</Link>
        <Link to="/predict">Predict</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
