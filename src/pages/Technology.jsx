import React from 'react';
import { useNavigate } from "react-router-dom";
import react from "src/assets/img/react.png";
import js from "src/assets/img/js.jpg";
import ts from "src/assets/img/typescript_logo.png";
import py from "src/assets/img/python.jpg";
import html5 from "src/assets/img/html5.jpg";
import bots from "src/assets/img/bootstrap-logo.png";
import flsk from "src/assets/img/flask.png";
import sql from "src/assets/img/sqla.png";
import jwt from "src/assets/img/jwt.jpg";
import css from "src/assets/img/CSS.png";
import api from "src/assets/img/api.jpg";
import msql from "src/assets/img/mysql.jpg";
import ptsql from "src/assets/img/postSQL.png";
import git from "src/assets/img/git.png";
import hub from "src/assets/img/github.png";


function Technology() {
  const navigate = useNavigate();

  return (
    <div className='container text-warning'>
      
      <div className="row justify-content-around mb-4">
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={react} alt="React/Redux logo" className='technologies-img' />
          </div>
          React/Redux
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={js.jpg} alt="JavaScript logo" className='technologies-img' />
          </div>
          JavaScript
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={ts} alt="TypeScript logo" className='technologies-img' />
          </div>
          TypeScript
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={py} alt="Python logo" className='technologies-img' />
          </div>
          Python
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={html5} alt="HTML5 logo" className='technologies-img' />
          </div>
          HTML5
        </div>
      </div>

      <div className="row justify-content-around mb-4">
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={bots} alt="Bootstrap logo" className='technologies-img' />
          </div>
          Bootstrap
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={flsk} alt="Flask logo" className='technologies-img' />
          </div>
          Flask
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={sql} alt="SQLAlchemy logo" className='technologies-img' />
          </div>
          SQLAlchemy
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={jwt} alt="JWT logo" className='technologies-img' />
          </div>
          JWT
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={css} alt="CSS3 logo" className='technologies-img' />
          </div>
          CSS3
        </div>
      </div>

      <div className="row justify-content-around mb-4">
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={api} alt="REST APIs logo" className='technologies-img' />
          </div>
          REST APIs
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={msql} alt="MySQL logo" className='technologies-img' />
          </div>
          MySQL
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={ptsql} alt="PostgreSQL logo" className='technologies-img' />
          </div>
          PostgreSQL
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={git} alt="Git logo" className='technologies-img' />
          </div>
          Git
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src={hub} alt="GitHub logo" className='technologies-img' />
          </div>
          GitHub
        </div>
      </div>

      <div className='text-center my-5'>
        <button className="btn btn-danger" onClick={() => navigate('/future')}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Technology;
