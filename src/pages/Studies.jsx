import React from "react";

function Studies() {
  return (
    <div className=" text-info">
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

      <h3 className="text-warning">CERTIFICATIONS</h3>
      <span className="certification">      
      </span>
      <div className="m-0">
        <img
          src="/src/assets/img/Titulo.jpg"
          alt=""
          className="titulo img-fluid object-fit-contain"
        />
      </div>
    </div>
  );
}

export default Studies;
