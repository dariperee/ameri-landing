import React, { useState } from 'react';
import landing1 from "../../assets/landing1.jpg";
import logo from "../../assets/logo.png";
import ModalComponent from '../Calendar&Modal/Modal';
import "./SectionA.css";

const SectionA = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <div id="sectionA">

        <div className="text-column">
          <div>
            <img src={logo} id="logo" alt="logo" />
          </div>
          <div>
            <p>El crecimiento de <br/>tu negocio <br/>comienza aquí</p>
            <h2>Somos Ameri</h2>
            <div className="button_slide slide_down" onClick={toggleModal}>
              Asesorate gratis aquí
            </div>
          </div>
        </div>

        <div className="image-column">
          <img src={landing1} alt="landing1"/>
        </div>
        
      </div>

      <ModalComponent isVisible={modalVisible} toggleVisibility={toggleModal} />
    </>
  );
}

export default SectionA;
