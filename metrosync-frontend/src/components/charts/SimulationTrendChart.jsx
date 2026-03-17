import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import API from "../../services/api";

const SimulationTrendChart = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    API.get("/simulation/history")
      .then(res => {

        const formatted = res.data.map((item, index) => ({
          name: `Run ${index + 1}`,
          stress: item.resultStress
        }));

        setData(formatted);

      })
      .catch(err => console.error(err));

  }, []);

  return (
    <div>

      <h3>Simulation Trend (Stress Over Time)</h3>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="stress"
            stroke="#1e293b"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};

export default SimulationTrendChart;