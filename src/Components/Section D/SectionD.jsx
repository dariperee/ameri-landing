import React, { useEffect } from 'react';
import './SectionD.css';

const SectionD = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sectionD = document.getElementById('sectionD');

      // Verifica si sectionD existe antes de continuar
      if (sectionD) {
        const sectionDPosition = sectionD.getBoundingClientRect().top;

        if (sectionDPosition < window.innerHeight * 0.75) {
          sectionD.classList.add('active');
        } else {
          sectionD.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="sectionD" className="fade-up">
     
        <div id='titleSectionD'>
          <h1>El impulso que necesitas, <br/> lo encuentras aquí. </h1>
        </div>

        <div id='bgSectionD'>
          <div id='shadowText'>
            <p>Somos Ameri, una agencia de marketing digital profesional con un objetivo claro: potenciar tu empresa y amplificar tus resultados.</p>
            <p>Un equipo complementado por expertos profesionales con capacidades específicas, lo que genera como consecuencia, una alta eficacia y versatilidad a la hora de conseguir resultados en cualquier plazo requerido.</p>
            <p>Con el inicio del proyecto Ameri nunca vas a estar solo, llevaremos un seguimiento del trabajo a realizar, desde el inicio, hasta el fin, donde se encuentran los resultados.</p>
          </div>
        </div>
      </div>
  );
}

export default SectionD;
