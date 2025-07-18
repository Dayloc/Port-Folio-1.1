import React from 'react'
import { useNavigate } from "react-router-dom"; 

function Experience() {
    const navigate = useNavigate()
  return (
    <div className=' text-light'>
      <h1>Experience</h1>
<h3 className='text-warning'>Enero 2025 - Actual</h3>
<h1 className='text-danger'>Teacher Assistant y Mentor  4Geeks Academy</h1>
 
 <h3 className='mb-5 mt-5'>Objetivo</h3>
<div className='text-warning'>
<h3>En mi desarrollo como <span className='text-danger'>Teacher Assistant </span> me especializo en el asesoramiento técnico a estudiantes en el preework, digase esto en darle las primeras clases en cuanto a HTML, CSS, Bootstrap y Java Script.</h3> 
</div>
<h3 className='mb-5 mt-5'>Mentory</h3>
<div className='text-warning'>
<h4>Algo que debo destacar como  <span className='text-light'>Mentor </span> es la satisfacción de ayudar a los estudiantes a crecer en esta rama, en  cada una de las mentorías, trato de que sean una experiencia para el estudiante, donde adquieren confianza en si mismo y refuerzan conocimientos de cada una de las temáticas que exponen.
Dentro de estas temáticas se encuentran temas como : <span className='text-danger'> Hooks de React, trabajo con APIs, mapeo de informacíon devuelta de estas Apis, trabajo con el backend, Python , Autenticación usando JWT, </span>entre otros temas tratados en el curso.</h4> 
</div>

<div className='text-center m-5'> <button className="btn btn-danger"  onClick={()=>navigate('/tecnology')} > Next</button></div>


    </div>
  )
}

export default Experience
