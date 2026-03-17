import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { SimulationProvider } from "./context/SimulationContext";
import { NotificationProvider } from "./context/NotificationContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationProvider>
      <SimulationProvider>
        <App />
      </SimulationProvider>
    </NotificationProvider>
  </React.StrictMode>
);