import './SectionB.css';
import logo from "../../assets/logo.png"
import React, { useEffect } from 'react';


const SectionB = () => {

  useEffect(() => {
    const handleScroll = () => {
      const infoB = document.getElementById('infoB');
      const infoBPosition = infoB.getBoundingClientRect().top;
      if (infoBPosition < window.innerHeight * 0.75) { infoB.classList.add('active');} 
      else {infoB.classList.remove('active');}  };
    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll);};
  }, []);


  return (
    <div id="sectionB">
      
      <div id='infoB' className='fade-up'>
        <img src={logo} alt="logo"/>
        <h1 id='titleSectionB'>Quiénes somos</h1>
        <p>Seremos los responsables de llevar tu empresa a un nuevo nivel, donde los grandes
          resultados dejan de ser un sueño, y se convierten en una realidad.</p>
        <p>Proyectamos y potenciamos tu empresa, para obtener resultados exponenciales, con medidas profesionales al
          igual que nuestras metodologías.</p>
        <p>Con Ameri, tu sueño es una realidad.</p>
      </div>

    </div>
  );
}

export default SectionB;