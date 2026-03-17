import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const Notifications = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications</h1>

      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        notifications.map((n) => (
          <div
            key={n.id}
            style={{
              background: "white",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
            }}
          >
            {n.message}
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;