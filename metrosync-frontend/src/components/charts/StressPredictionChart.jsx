import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { time: "8 AM", stress: 40 },
  { time: "9 AM", stress: 60 },
  { time: "10 AM", stress: 75 },
  { time: "11 AM", stress: 85 },
  { time: "12 PM", stress: 65 }
];

const StressPredictionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="stress"
          stroke="#ef4444"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StressPredictionChart;