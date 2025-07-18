import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const interNavigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-between">
            {[
              { path: "/", label: "🏠 Home" },
              { path: "/myLife", label: "My Life" },
              { path: "/projects", label: "Projects" },
              { path: "/studies", label: "Study" },
              { path: "/experience", label: "Experience" },
              { path: "/technology", label: "Technology" },
              { path: "/future", label: "Future" },
            ].map(({ path, label }) => (
              <li className="nav-item flex-grow-1 mx-1" key={path}>
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={() => interNavigate(path)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
