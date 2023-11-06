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
          html: 'Aquí te ayudaremos, resolviendo dudas, consultas, y explicándote nuestra forma de trabajo.<br/><br/> La reunion dura 20 minutos como maximo, y es totalmente sin compromiso. <br/><br/> Una vez selecionada la fecha y hora, se te enviara un mail detallado con más información.',
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
          <Calendar />
        </div>
      </div>
      <button className="close-button" onClick={toggleVisibility}>
        Cerrar
      </button>
    </div>
  );
};

export default ModalComponent;
