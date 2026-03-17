import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";

const Navbar = ({ toggleSidebar }) => {

  const { notifications } = useContext(NotificationContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const dropdownRef = useRef();

 const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  /* close dropdown if clicked outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);

  }, []);

  return (
    <div style={styles.navbar}>

      <button style={styles.menuBtn} onClick={toggleSidebar}>
        ☰
      </button>

      <h2 style={styles.title}>Metro Congestion Prediction System</h2>

      <div style={styles.rightSection} ref={dropdownRef}>

        {/* Dark Mode Toggle */}
        <span style={styles.darkBtn} onClick={toggleDarkMode}>
          🌙
        </span>

        {/* Notification Bell */}
        <div style={styles.notificationBox}>

          <span
            style={styles.bell}
            onClick={() => setOpen(!open)}
          >
            🔔
          </span>

          {notifications.length > 0 && (
            <span style={styles.badge}>{notifications.length}</span>
          )}

          {open && (
            <div style={styles.dropdown}>
              {notifications.length === 0 ? (
                <p>No notifications</p>
              ) : (
                notifications.map((n) => (
                  <div key={n.id} style={styles.notificationItem}>
                    {n.message}
                  </div>
                ))
              )}
            </div>
          )}

        </div>

        <button style={styles.logout} onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#1e293b",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
  },

  title: {
    fontWeight: "600",
  },

  menuBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  notificationBox: {
    position: "relative",
    cursor: "pointer",
  },

  bell: {
    fontSize: "20px",
  },

  darkBtn: {
    fontSize: "18px",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    background: "#ef4444",
    color: "white",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "50%",
  },

  logout: {
    padding: "6px 12px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  dropdown: {
    position: "absolute",
    top: "35px",
    right: "0",
    width: "260px",
    background: "white",
    color: "black",
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    padding: "10px",
    zIndex: 2000,
  },

  notificationItem: {
    padding: "8px",
    borderBottom: "1px solid #eee",
    fontSize: "14px",
  },
};

export default Navbar;