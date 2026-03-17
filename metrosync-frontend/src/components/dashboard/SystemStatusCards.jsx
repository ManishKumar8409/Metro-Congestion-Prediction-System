import { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";

const SystemStatusCards = () => {

  const { notifications } = useContext(NotificationContext);

  const stats = [
    { title: "Stations", value: 285 },
    { title: "Active Lines", value: 12 },
    { title: "Passengers Today", value: "1.2M" },
    { title: "Alerts", value: notifications.length }
  ];

  return (
    <div style={styles.container}>
      {stats.map((item, index) => (
        <div key={index} style={styles.card}>
          <h4>{item.title}</h4>
          <h2>{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: "20px",
    marginBottom: "30px"
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  }
};

export default SystemStatusCards;