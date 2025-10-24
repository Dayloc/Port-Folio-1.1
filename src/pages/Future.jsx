import React from 'react';
import { useNavigate } from "react-router-dom"; 

function Future() {
  const navigate = useNavigate();

  return (
    <div className="future-container">
      <section className="vision-section m-4">
        <div className="text-center mb-4">
          <h2 className="display-6 fw-bold text-info">
            🚀 Todo lo que quiero lograr
          </h2>
        </div>
        <div className="future-text fs-6">
          <p>
            En un mundo cada vez más impulsado por la tecnología, mi objetivo no es solo adaptarme, sino liderar el cambio.
            Aspiro a construir interfaces que no solo funcionen, sino que inspiren. Quiero desarrollar sistemas inteligentes,
            accesibles y humanos que transformen la forma en que las personas interactúan con el mundo digital.
          </p>
          <p>
            Mi visión va más allá del código: quiero formar parte de soluciones que mejoren vidas, que automaticen lo tedioso
            y potencien lo creativo. Desde el desarrollo de aplicaciones de alto impacto hasta plataformas impulsadas por
            inteligencia artificial, mi misión es clara: <span className="text-primary fw-semibold">crear tecnología con propósito y alma</span>.
          </p>
          <p className="fst-italic text-secondary">
            Estoy aquí para aprender cada día, para hackear el futuro con ética, diseño y funcionalidad, y para dejar mi huella
            en un universo digital donde todo es posible.
          </p>
        </div>
      </section>

      <div className='text-center my-5'>
        <button className="btn-main future-btn" onClick={() => navigate('/')}>
          🏠 Home
        </button>
      </div>
    </div>
  );
}

export default Future;
