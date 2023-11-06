import React, { useEffect } from 'react';
import './SectionC.css';
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"


const SectionC = () => {

  useEffect(() => {
    const handleScroll = () => {
      const sectionC = document.getElementById('sectionC');

      // Verifica si sectionC existe antes de continuar
      if (sectionC) {
        const sectionCPosition = sectionC.getBoundingClientRect().top;

        if (sectionCPosition < window.innerHeight * 0.75) {
          sectionC.classList.add('active');
        } else {
          sectionC.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])



  return (
    <div id="sectionC" className='fade-up'>

      <h1>A qué nos dedicamos</h1>
      <section id='cards'>

        <div className='card'>
          <div className='circle-container'>
            <img src={card1} alt="card1"/>
          </div>
          <h2>Asesoría para empresas</h2>
          <ul>
            <li>Analizamos la situación actual de su empresa</li>
            <li>Identificamos puntos débiles y problemas.</li>
            <li>Establecemos una asesoría personalizada</li>
          </ul>
        </div>

        <div className='card'>
          <div className='circle-container'>
            <img src={card2} alt="card2"/>
          </div>
          <h2>Apalancamiento con redes sociales</h2>
          <ul> 
            <li>Analizamos y proyectamos estrategias a utilizar</li>
            <li>Colocamos tu negocio en plataformas populares</li>
            <li>Analizamos el punto de partida</li>
          </ul>
        </div>

        <div className='card'>
          <div className='circle-container'>
            <img src={card3} alt="card3"/>
          </div>
          <h2>Ejecucion y seguimiento</h2>
          <ul>
            <li>Ejecutamos la estrategia adecuada a su empresa</li>
            <li>Seguimos el desarrollo de la estrategia ejecutada</li>
            <li>Optimizaciones y análisis por medio de métricas y herramientas profesionales.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}


export default SectionC