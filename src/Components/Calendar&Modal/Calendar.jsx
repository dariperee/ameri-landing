import React, { useEffect } from 'react';
import './Calendar.css'; // Agrega un archivo CSS para estilos específicos del calendario

const Calendar = () => {
  useEffect(() => {
    // Cargar el script de YouCanBook.me
    const script = document.createElement('script');
    script.src = 'https://embed.ycb.me';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="calendar" className="calendar-container">
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<script src="https://embed.ycb.me" async="true" data-domain="darioperez201864"></script>',
        }}
      />
    </div>
  );
};

export default Calendar;