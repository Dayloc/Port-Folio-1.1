import React from 'react'
import { useNavigate } from 'react-router-dom'

function MyLife() {
  const navigate = useNavigate()
  return (
    <div className='container m-5  '>

       <h1 className="fade-text fs-1 text-danger">My Life</h1>

      <p className='typewriter '>
      Desde joven, la lógica y las matemáticas despertaron en mí una curiosidad <br /> que pronto se transformó en pasión por la informática.  <br />
      En mi último año preuniversitario decidí apostar por la ingeniería informática,<br /> ingresando a la UCI, en Cuba La Universidad de las Ciencias Informáticas.  
      <br />Allí descubrí lenguajes como ensamblador y C++, <br />que, aunque no los utilicé profesionalmente,<br /> forjaron mis bases.  
      <br />Fue en diciembre de 2024 cuando mi viaje dio un giro: <br />un bootcamp full stack me ofreció el camino real hacia lo que siempre soñé ser. <br />
      Este Bootcamp se llama <span className='text-primary'>4GeckAcademy</span>. <br /> 
      Hoy, desarrollo aplicaciones con propósito, creatividad y visión de futuro.
      </p>
      <div className='text-center m-5'> <button className="btn btn-danger"  onClick={()=>navigate('/projects')} > Next</button></div>
     
    </div>
  )
}

export default MyLife
