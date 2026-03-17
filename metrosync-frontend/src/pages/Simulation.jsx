import { useState, useContext } from "react";
import "../assets/styles/simulation.css";
import API from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { SimulationContext } from "../context/SimulationContext";
import { NotificationContext } from "../context/NotificationContext";

const Simulation = () => {

  const [passengerIncrease, setPassengerIncrease] = useState(0);
  const [trainReduction, setTrainReduction] = useState(0);
  const [result, setResult] = useState(null);

  const { setSimulatedStress } = useContext(SimulationContext);
  const { addNotification } = useContext(NotificationContext);

  const baseStress = 70;

  const runSimulation = async () => {

  try {

    const response = await API.post("/simulation/run", {
      passengerIncrease,
      trainReduction
    });

    const finalStress = response.data.resultStress;

    setResult(finalStress);
    setSimulatedStress(finalStress);

    // 🔔 Notification
    addNotification(`Simulation updated stress to ${finalStress}%`);

    if (finalStress >= 85) {
      addNotification("⚠ Critical congestion detected on metro line!");
    }

  } catch (error) {

    console.error("Simulation Error:", error);

  }

};

  const getRiskLevel = (value) => {
    if (value < 50) return { label: "Low Risk", color: "#22c55e" };
    if (value < 80) return { label: "Moderate Risk", color: "#facc15" };
    return { label: "Critical Risk", color: "#ef4444" };
  };

  return (
    <div className="simulation-container">

      <h1>Simulation Panel</h1>

      {/* Input Section */}

      <div className="simulation-form">

        <div>
          <label>Passenger Increase (%)</label>
          <input
            type="number"
            value={passengerIncrease}
            onChange={(e) => setPassengerIncrease(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Train Reduction (No.)</label>
          <input
            type="number"
            value={trainReduction}
            onChange={(e) => setTrainReduction(Number(e.target.value))}
          />
        </div>

        <button onClick={runSimulation}>
          Run Simulation
        </button>

      </div>

      {/* Result Section */}

      {result !== null && (

        <div className="simulation-result">

          <h2>Simulation Result</h2>

          <div className="comparison-row">

            <div>
              <p>Base Stress</p>
              <h3>{baseStress}%</h3>
            </div>

            <div>
              <p>Updated Stress</p>
              <h3>{result}%</h3>
            </div>

          </div>

          <div
            className="risk-badge"
            style={{ background: getRiskLevel(result).color }}
          >
            {getRiskLevel(result).label}
          </div>

          {result >= 85 && (
            <p className="alert-text">
              ⚠ Immediate operational intervention required!
            </p>
          )}

          {/* Chart */}

          <div style={{ marginTop: "30px", height: "250px" }}>

            <ResponsiveContainer width="100%" height="100%">

              <BarChart
                data={[
                  { name: "Before", value: baseStress },
                  { name: "After", value: result },
                ]}
              >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1e293b" />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      )}

    </div>
  );
};

export default Simulation;