


    import React from 'react';
import { useNavigate } from "react-router-dom";
import react from "../assets/img/react.png";
import javaScript from "../assets/img/js.jpg";
import ts from "../assets/img/typescript_logo.png";
import py from "../assets/img/python.jpg";
import html5 from "../assets/img/html5.jpg";
import bots from "../assets/img/bootstrap-logo.png";
import flsk from "../assets/img/flask.png";
import sql from "../assets/img/sqlA.png";
import jwt from "../assets/img/jwt.jpg";
import css from "../assets/img/CSS.png";
import api from "../assets/img/api.jpg";
import msql from "../assets/img/mysql.jpg";
import ptsql from "../assets/img/postSQL.png";
import git from "../assets/img/git.png";
import hub from "../assets/img/github.png";

function Technology() {
  const navigate = useNavigate();

  const techRows = [
    [
      { img: react, name: "React/Redux" },
      { img: javaScript, name: "JavaScript" },
      { img: ts, name: "TypeScript" },
      { img: py, name: "Python" },
      { img: html5, name: "HTML5" },
    ],
    [
      { img: bots, name: "Bootstrap" },
      { img: flsk, name: "Flask" },
      { img: sql, name: "SQLAlchemy" },
      { img: jwt, name: "JWT" },
      { img: css, name: "CSS3" },
    ],
    [
      { img: api, name: "REST APIs" },
      { img: msql, name: "MySQL" },
      { img: ptsql, name: "PostgreSQL" },
      { img: git, name: "Git" },
      { img: hub, name: "GitHub" },
    ]
  ];

  return (
    <div className="technology-container">
      {techRows.map((row, rowIndex) => (
        <div className="technology-row" key={rowIndex}>
          {row.map((tech, i) => (
            <div className="technology-card" key={i}>
              <img src={tech.img} alt={`${tech.name} logo`} className="technologies-img" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      ))}

      <div className='text-center'>
        <button className='technology-next-btn' onClick={() => navigate('/future')}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Technology;


