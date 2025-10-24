import React from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center" >
   
    <div className="d-flex justify-content-center gap-3">
      <a href="https://github.com/Dayloc" target="_blank" rel="noopener noreferrer" style={{ color: "#f0f0f0", fontSize: "1.2rem" }}>
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/Dayloc" target="_blank" rel="noopener noreferrer" style={{ color: "#0a66c2", fontSize: "1.2rem" }}>
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/Dayloc" target="_blank" rel="noopener noreferrer" style={{ color: "#1da1f2", fontSize: "1.2rem" }}>
        <i className="fab fa-twitter"></i>
      </a>
    </div>
	 <p className="mb-2">
      Made with <i className="fa fa-heart text-info" /> by <span className="fw-bold">Dayloc</span>
    </p>
  </footer>
);
