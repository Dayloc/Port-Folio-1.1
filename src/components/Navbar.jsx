import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const interNavigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "🏠 Home" },
    { path: "/myLife", label: "Sobre mi" },
    { path: "/projects", label: "Proyectos" },
    { path: "/studies", label: "Estudios" },
    { path: "/experience", label: "Experiencia" },
    { path: "/technology", label: "Herramientas" },
    { path: "/future", label: "Aspiraciones" },
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-between">
            {navItems.map(({ path, label }) => (
              <li className="nav-item flex-grow-1 mx-1" key={path}>
                <button
                  className={`nav-btn w-100 ${
                    location.pathname === path ? "active-nav" : ""
                  }`}
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
