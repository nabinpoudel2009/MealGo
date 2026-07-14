import { createContext, useEffect, useState } from "react";
export const LocationProvider = ({ children }) => {

    const [selectedLocation, setSelectedLocation] = useState(() => {
        return localStorage.getItem("location") || "Pokhara";
    });
    
    useEffect(() => {
        localStorage.setItem("location", selectedLocation);
    }, [selectedLocation]);

  return (
    <LocationContext.Provider
      value={{ selectedLocation, setSelectedLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const LocationContext = createContext();