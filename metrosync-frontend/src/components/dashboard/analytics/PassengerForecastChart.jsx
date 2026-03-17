import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import API from "../../../services/api";

const PassengerForecastChart = () => {

  const [data,setData] = useState([]);

  useEffect(()=>{

    API.get("/forecast/passenger")
      .then(res=>{
        setData(res.data);
      })
      .catch(err=>{
        console.log(err);
      });

  },[]);

  return (

    <div className="chart-box">

      <h3>AI Passenger Forecast</h3>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="predictedPassengers"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

};

export default PassengerForecastChart;