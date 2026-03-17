const OverviewCard = ({ title, value }) => {
  return (
    <div className="overview-card">
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
};

export default OverviewCard;