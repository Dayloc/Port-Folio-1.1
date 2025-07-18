import React from 'react';
import { useNavigate } from "react-router-dom";

function Technology() {
  const navigate = useNavigate();

  return (
    <div className='container text-warning'>
      
      <div className="row justify-content-around mb-4">
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/react.png" alt="React/Redux logo" className='technologies-img' />
          </div>
          React/Redux
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/js.jpg" alt="JavaScript logo" className='technologies-img' />
          </div>
          JavaScript
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/typescript_logo.png" alt="TypeScript logo" className='technologies-img' />
          </div>
          TypeScript
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/python.jpg" alt="Python logo" className='technologies-img' />
          </div>
          Python
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/html5.jpg" alt="HTML5 logo" className='technologies-img' />
          </div>
          HTML5
        </div>
      </div>

      <div className="row justify-content-around mb-4">
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/bootstrap-logo.png" alt="Bootstrap logo" className='technologies-img' />
          </div>
          Bootstrap
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/flask.png" alt="Flask logo" className='technologies-img' />
          </div>
          Flask
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/sqla.png" alt="SQLAlchemy logo" className='technologies-img' />
          </div>
          SQLAlchemy
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/jwt.jpg" alt="JWT logo" className='technologies-img' />
          </div>
          JWT
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/CSS.png" alt="CSS3 logo" className='technologies-img' />
          </div>
          CSS3
        </div>
      </div>

      <div className="row justify-content-around mb-4">
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/api.jpg" alt="REST APIs logo" className='technologies-img' />
          </div>
          REST APIs
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/mysql.jpg" alt="MySQL logo" className='technologies-img' />
          </div>
          MySQL
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/postSQL.png" alt="PostgreSQL logo" className='technologies-img' />
          </div>
          PostgreSQL
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/git.png" alt="Git logo" className='technologies-img' />
          </div>
          Git
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center gap-2 mb-3">
          <div className='ratio ratio-1x1' style={{maxWidth: '50px'}}>
            <img src="/src/assets/img/github.png" alt="GitHub logo" className='technologies-img' />
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
