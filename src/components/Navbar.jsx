import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">GhostOrNot 👻</Link>
        <div className="navbar-links">
          <Link to="/search">Search</Link>
          <Link to="/top-posters">Top Posters</Link>
          <Link to="/report">Report</Link>
        </div>
      </div>
    </nav>
  );
}
