import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineStressChart = () => {
  const data = [
    { time: "8 AM", stress: 40 },
    { time: "9 AM", stress: 65 },
    { time: "10 AM", stress: 85 },
    { time: "11 AM", stress: 70 },
    { time: "12 PM", stress: 55 },
  ];

  return (
    <div style={styles.chartBox}>
      <h3>Line Stress Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="stress" stroke="#1e293b" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles = {
  chartBox: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  
};




export default LineStressChart;