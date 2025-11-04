import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-3 w-100"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Brand / Logo */}
      <Link
        className="navbar-brand"
        to="/"
        style={{
          fontWeight: "bold",
          fontSize: "22px",
          color: "#f8f9fa",
          letterSpacing: "1px",
        }}
      >
        ⚡ SSB
      </Link>

      {/* Hamburger button for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu items */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex flex-row">
          <li className="nav-item px-2">
            <Link
              className="nav-link"
              to="/addservice"
              style={{
                padding: "8px 15px",
                borderRadius: "6px",
                transition: "0.3s",
                color: "#e0e0e0",
              }}
            >
              🛠 AddService
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link
              className="nav-link"
              to="/services"
              style={{
                padding: "8px 15px",
                borderRadius: "6px",
                transition: "0.3s",
                color: "#e0e0e0",
              }}
            >
              🛠 Services
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link
              className="nav-link"
              to="/bookings"
              style={{
                padding: "8px 15px",
                borderRadius: "6px",
                transition: "0.3s",
                color: "#e0e0e0",
              }}
            >
              📅 Bookings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
