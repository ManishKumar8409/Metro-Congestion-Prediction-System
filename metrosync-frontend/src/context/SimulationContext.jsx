import { createContext, useState } from "react";

export const SimulationContext = createContext();

export const SimulationProvider = ({ children }) => {
  const [simulatedStress, setSimulatedStress] = useState(null);

  return (
    <SimulationContext.Provider
      value={{ simulatedStress, setSimulatedStress }}
    >
      {children}
    </SimulationContext.Provider>
  );
};