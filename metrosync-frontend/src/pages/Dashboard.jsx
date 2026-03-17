import { useState, useEffect } from "react";

import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

import StressCard from "../components/dashboard/StressCard";
import SystemStatusCards from "../components/dashboard/SystemStatusCards";
import LiveStationLoad from "../components/dashboard/LiveStationLoad";
import StressPredictionChart from "../components/charts/StressPredictionChart";
import AICongestionPanel from "../components/dashboard/AICongestionPanel";
import SimulationTrendChart from "../components/charts/SimulationTrendChart";
import API from "../services/api";

import "../assets/styles/dashboard.css";

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  /* Fetch Simulation History */
  useEffect(() => {

    API.get("/simulation/history")
      .then(res => {
        setHistory(res.data);
      })
      .catch(err => console.error(err));

  }, []);

  const metroData = [
    { lineName: "Red Line", stress: 45 },
    { lineName: "Blue Line", stress: 72 },
    { lineName: "Yellow Line", stress: 88 }
  ];

  return (
    <div>

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Main Dashboard */}
      <div className={`dashboard-container ${isOpen ? "shift" : ""}`}>

        <h1 className="dashboard-heading">Dashboard</h1>

        {/* System Status Cards */}
        <SystemStatusCards />

        {/* Metro Line Stress Cards */}
        <div className="cards-grid">
          {metroData.map((line, index) => (
            <StressCard
              key={index}
              lineName={line.lineName}
              stress={line.stress}
            />
          ))}
        </div>

        {/* Live Station Load */}
        <div className="chart-box">
          <LiveStationLoad />
        </div>

        {/* Stress Prediction Chart */}
        <div className="chart-box">
          <StressPredictionChart />
        </div>
        {/* Simulation Trend Chart */}
        <div className="chart-box">
            <SimulationTrendChart />
          </div>

        {/* AI Congestion Prediction */}
        <div className="chart-box">
          <AICongestionPanel />
        </div>

        {/* Simulation History */}
        <div className="chart-box">

  <h3>Recent Simulations</h3>

  {history.length === 0 ? (
    <p>No simulation data yet</p>
  ) : (
    history.map((sim) => (

      <div key={sim._id} className="simulation-item">

        <div>
          <span className="tag passenger">
            Passenger +{sim.passengerIncrease}%
          </span>

          <span className="tag train">
            Train -{sim.trainReduction}
          </span>
        </div>

        <div className="stress-value">
          Stress {sim.resultStress}%
        </div>

      </div>

    ))
  )}

</div>

      </div>

    </div>
  );
};

export default Dashboard;