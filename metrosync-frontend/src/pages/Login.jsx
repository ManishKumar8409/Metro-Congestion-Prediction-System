import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import API from "../services/api";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {

  e.preventDefault();

  try {

    const res = await API.post("/auth/login", {
      email,
      password
    });

    console.log(res.data);

    // user save
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // auth flag
    localStorage.setItem("isAuth", "true");

    navigate("/");

  } catch (error) {

    setError(error.response?.data?.message || "Login failed");

  }

};

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>MetroSync</h2>
        <p className="login-subtitle">Login to your dashboard</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>

      </div>

    </div>
  );
};

export default Login;