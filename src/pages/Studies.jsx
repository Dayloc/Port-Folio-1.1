import React from "react";
import titulo from "src/assets/img/Titulo.jpg";
import { useNavigate } from "react-router-dom"; 

function Studies() {
  const navigate = useNavigate()
  return (
    <div className=" text-warning">
      <h1 className="text-danger">FORMACIÓN</h1>
      <div className="container">
        <div className="row ">
          <div className="col">
            <h4>07/2024</h4>

            <h4>Full Stack Developer Program</h4>
            <p>4Geeks Academy</p>
          </div>
          <div className="col">
            <h4 >01/2010</h4>

            <h4>
              Computer Science Degree Universidad de las Ciencias Informáticas
              (UCI)
            </h4>
          </div>
        </div>
      </div>

      <h3 className="text-dark-emphasis">CERTIFICATIONS</h3>
      <span className="certification">      
      </span>
      <div className="m-0">
        <img
          src={titulo}
          alt=""
          className="titulo img-fluid object-fit-contain"
        />
      </div>
      <div className='text-center m-5'> <button className="btn btn-danger"  onClick={()=>navigate('/experience')} > Next</button></div>
    </div>
  );
}

export default Studies;
