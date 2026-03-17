const express = require("express");
const router = express.Router();

const {
  runSimulation,
  getSimulationHistory
} = require("../controllers/simulationController");

router.post("/run", runSimulation);

router.get("/history", getSimulationHistory);

module.exports = router;