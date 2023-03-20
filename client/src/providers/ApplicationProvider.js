import React, { useContext, useState } from "react";

const ApplicationContext = React.createContext();

export function useApplication() {
  return useContext(ApplicationContext);
}

export function ApplicationProvider({ children }) {
  const [selectedApplication, setSelectedApplication] = useState();

  const value = {
    selectedApplication,
    setSelectedApplication,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
