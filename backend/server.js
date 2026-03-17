const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const metroRoutes = require("./routes/metroRoutes");
const authRoutes = require("./routes/authRoutes");
const simulationRoutes = require("./routes/simulationRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const forecastRoutes = require("./routes/forecastRoutes");
const app = express();

/* middleware */
app.use(cors());
app.use(express.json());

/* connect database */
connectDB();

/* routes */
app.use("/api/auth", authRoutes);
app.use("/api/simulation", simulationRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/metro", metroRoutes);
app.use("/api/forecast", forecastRoutes);
app.get("/", (req, res) => {
  res.send("MetroSync Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});