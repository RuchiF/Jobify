import React, { useState, useContext, useEffect, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
