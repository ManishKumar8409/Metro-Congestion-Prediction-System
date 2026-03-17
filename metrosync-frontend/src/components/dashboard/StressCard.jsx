const StressCard = ({ lineName, stress }) => {
  const getColor = () => {
    if (stress < 50) return "#22c55e";
    if (stress < 80) return "#facc15";
    return "#ef4444";
  };

  return (
    <div className="stress-card">
      <h4>{lineName}</h4>
      <h2 style={{ color: getColor() }}>{stress}%</h2>
      <p>Current Load</p>
    </div>
  );
};

export default StressCard;