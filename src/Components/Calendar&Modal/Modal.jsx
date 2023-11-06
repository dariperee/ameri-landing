// ModalComponent.jsx
import React, { useEffect } from 'react';
import './Modal.css';
import Calendar from './Calendar';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useAlert } from './AlertContext'; 

const ModalComponent = ({ isVisible, toggleVisibility }) => {
  const { alertShown, showAlert } = useAlert();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    // Mostrar alerta solo la primera vez con un retraso de 500ms
    if (!alertShown && isVisible) {
      setTimeout(() => {
        MySwal.fire({
          title: 'Estás por agendar una asesoría gratuita.',
          html: 'Aquí te ayudaremos, resolviendo dudas, consultas, y explicándote nuestra forma de trabajo.<br/><br/> La reunion dura 20 minutos como máximo, sin compromiso. <br/><br/> Una vez seleccionada la fecha y hora, se te enviará un mail detallado con más información.',
          icon: 'info',
          dangerMode: true, 
        });
        showAlert(); 
      }, 1100);
    }
  }, [isVisible, alertShown, showAlert]);

  return (
    <div className={`modal-container ${isVisible ? 'visible' : ''}`}>
      <div className="modal-content">
        <div className="scrollable-content">
        <button className="close-button" onClick={toggleVisibility}>Cerrar</button>
        <Calendar />
        </div>
      </div>
     
    </div>
  );
};

export default ModalComponent;
