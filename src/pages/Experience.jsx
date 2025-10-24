import React from 'react'
import { useNavigate } from "react-router-dom"; 

function Experience() {
    const navigate = useNavigate()
  return (
   <div className='experience-container'>
  <h1>Experiencia</h1>
  <h3 className='experience-date'>Enero 2025 - Actual</h3>
  <h1 className='experience-role'>Teacher Assistant y Mentor  4Geeks Academy</h1>

  <div className='experience-section'>
    <h3>Objetivo</h3>
    <h4>En mi desarrollo como <span className='highlight-role'>Teacher Assistant</span> me especializo en asesoramiento técnico a estudiantes en el prework, dándoles las primeras clases de HTML, CSS, Bootstrap y JavaScript.</h4>
  </div>

  <div className='experience-section'>
    <h3>Mentory</h3>
    <h4>Como <span className='highlight-role'>Mentor</span>, ayudo a los estudiantes a crecer, reforzando conocimientos en temas como: <span className='highlight-skill'>Hooks de React, APIs, backend con Python, JWT</span> entre otros.</h4>
  </div>

  <button className='btn-next' onClick={()=>navigate('/technology')}>Next</button>
</div>
  )
}

export default Experience
