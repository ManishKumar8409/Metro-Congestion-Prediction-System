import { useEffect, useState } from "react";
import API from "../services/api";

import LineComparisonChart from "../components/dashboard/analytics/LineComparisonChart";
import PassengerTrendChart from "../components/dashboard/analytics/PassengerTrendChart";
import CongestionPieChart from "../components/dashboard/analytics/CongestionPieChart";
import PassengerForecastChart from "../components/dashboard/analytics/PassengerForecastChart";
import MetroNetwork from "../components/metro/MetroNetwork";
import MetroRouteMap from "../components/metro/MetroRouteMap";

import "../assets/styles/analytics.css";

const Analytics = () => {

  const [analyticsData, setAnalyticsData] = useState(null);
  const [line, setLine] = useState("all");
  const [time, setTime] = useState("month");

  useEffect(() => {

    API.get(`/analytics?line=${line}&time=${time}`)
      .then(res => {
        setAnalyticsData(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, [line, time]);

  return (
    <div className="analytics-container">

      <h1 className="analytics-heading">Analytics Overview</h1>

      {/* Filters */}
      <div className="analytics-filters">

        <select value={line} onChange={(e) => setLine(e.target.value)}>
          <option value="all">All Lines</option>
          <option value="red">Red Line</option>
          <option value="blue">Blue Line</option>
          <option value="yellow">Yellow Line</option>
        </select>

        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="3months">Last 3 Months</option>
        </select>

      </div>

      {/* Stats Summary */}
      {analyticsData && (
        <div className="analytics-summary">

          <div className="summary-card">
            <h3>Total Simulations</h3>
            <p>{analyticsData.totalSimulations}</p>
          </div>

          <div className="summary-card">
            <h3>Average Stress</h3>
            <p>{analyticsData.averageStress}%</p>
          </div>

          <div className="summary-card">
            <h3>Max Stress</h3>
            <p>{analyticsData.maxStress}%</p>
          </div>

          <div className="summary-card">
            <h3>Min Stress</h3>
            <p>{analyticsData.minStress}%</p>
          </div>

        </div>
      )}

      {/* Charts Row */}
      <div className="analytics-grid">

        <LineComparisonChart data={analyticsData?.simulations} />

        <PassengerTrendChart data={analyticsData?.simulations} />

      </div>
      {/* Forecast Chart */}
      <div className="analytics-full">
          <PassengerForecastChart />
      </div>

      {/* Pie Chart */}
      <div className="analytics-full">
        <h2>Station Congestion Distribution</h2>
        <CongestionPieChart data={analyticsData?.simulations} />
      </div>

      {/* Metro Route Finder */}
      <div className="analytics-full">
        <h2>Metro Route Finder</h2>
        <MetroRouteMap />
      </div>

      {/* Metro Network */}
      <div className="analytics-full">
        <h2>Metro Network Visualization</h2>
        <MetroNetwork />
      </div>

    </div>
  );
};

export default Analytics;