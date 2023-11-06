  import React, { useState, useEffect } from 'react';
  import landing5 from "../../assets/landing5.jpg";
  import "./SectionE.css";
  import ModalComponent from '../Calendar&Modal/Modal';

  const SectionE = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };

      useEffect(() => {
        const handleScroll = () => {
          const sectionE = document.getElementById('sectionE');
    
          // Verifica si sectionE existe antes de continuar
          if (sectionE) {
            const sectionEPosition = sectionE.getBoundingClientRect().top;
    
            if (sectionEPosition < window.innerHeight * 0.75) {
              sectionE.classList.add('active');
            } else {
              sectionE.classList.remove('active');
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
      <>
        <div id="sectionE" className='fade-up'>
          <div id='imgCal'>
            <img src={landing5} alt="landing5" />
          </div>

          <div id='contactInfo'>
            <h1>Hagamos esto juntos.</h1>
            <button className="button_slide slide_down" onClick={toggleModal}>
              Asesorate gratis aquí
            </button>
            <div id='contactData'>
              <div>
                <h2>Ubicacion</h2>
                <p>Buenos Aires, Argentina</p>
              </div>
              <div>
                <h2>Contacto</h2>
                <p>+54 1234 5678 <br />
                  hola@sitioincreible.com.ar</p>
              </div>
            </div>
          </div>
        </div>

        <ModalComponent isVisible={modalVisible} toggleVisibility={toggleModal} />
      </>
    );
  }

  export default SectionE;
