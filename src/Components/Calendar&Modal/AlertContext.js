// AlertContext.js
import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertShown, setAlertShown] = useState(false);

  const showAlert = () => {
    setAlertShown(true);
  };

  return (
    <AlertContext.Provider value={{ alertShown, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
