import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const PassengerTrendChart = ({ data }) => {

  if (!data) return null;

  const chartData = data.map((s,i)=>({
    name: `Sim ${i+1}`,
    stress: s.resultStress
  }));

  return (

    <div className="chart-box">

      <h3>Passenger Growth</h3>

      <ResponsiveContainer width="100%" height={250}>

        <LineChart data={chartData}>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="stress"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

};

export default PassengerTrendChart;