import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const LineComparisonChart = ({ data }) => {

  if (!data) return null;

  const chartData = data.slice(0,3).map((s,i)=>({
    name: `Sim ${i+1}`,
    stress: s.resultStress
  }));

  return (

    <div className="chart-box">

      <h3>Line Stress Comparison</h3>

      <ResponsiveContainer width="100%" height={250}>

        <BarChart data={chartData}>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="stress" fill="#1e293b" />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

};

export default LineComparisonChart;