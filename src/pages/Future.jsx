import React from 'react'
import { useNavigate } from "react-router-dom"; 

function Future() {
   const navigate = useNavigate()
  return (
    <div className="container">
      <section className="vision-section text-white py-5 px-3">
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold text-warning">
          🚀 Todo lo que quiero lograr
        </h2>
      </div>
      <div className="fs-5">
        <p>
          En un mundo cada vez más impulsado por la tecnología, mi objetivo no es solo adaptarme, sino liderar el cambio.
          Aspiro a construir interfaces que no solo funcionen, sino que inspiren. Quiero desarrollar sistemas inteligentes,
          accesibles y humanos que transformen la forma en que las personas interactúan con el mundo digital.
        </p>
        <p>
          Mi visión va más allá del código: quiero formar parte de soluciones que mejoren vidas, que automaticen lo tedioso
          y potencien lo creativo. Desde el desarrollo de aplicaciones de alto impacto hasta plataformas impulsadas por
          inteligencia artificial, mi misión es clara: <span className="text-warning fw-semibold">crear tecnología con propósito y alma</span>.
        </p>
        <p className="fst-italic text-danger">
          Estoy aquí para aprender cada día, para hackear el futuro con ética, diseño y funcionalidad, y para dejar mi huella
          en un universo digital donde todo es posible.
        </p>
      </div>

      
    
    </section>
    <div className='text-center m-5'> <button className="btn btn-danger"  onClick={()=>navigate('/')} > 🏠Home</button></div>
    </div>
     
    
  )
}

export default Future
