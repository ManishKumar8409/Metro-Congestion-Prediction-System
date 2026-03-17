import { Link } from "react-router-dom";
import "../assets/styles/layout.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>

      <Link to="/">Dashboard</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/simulation">Simulation</Link>
      <Link to="/notifications">Notifications</Link>

    </div>
  );
};

export default Sidebar;