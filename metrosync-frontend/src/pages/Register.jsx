import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../assets/styles/register.css";

const Register = () => {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Account created successfully");

      navigate("/login");

    } catch (error) {

      setError("Registration failed");

    }

  };

  return (

    <div className="register-container">

      <div className="register-card">

        <h2>MetroSync</h2>
        <p className="subtitle">Create your account</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleRegister}>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>

        </form>

        <p className="login-link">
          Already have an account?
          <span onClick={()=>navigate("/login")}> Login</span>
        </p>

      </div>

    </div>

  );

};

export default Register;