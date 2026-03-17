const Simulation = require("../models/Simulation");

/* Run Simulation */
const runSimulation = async (req, res) => {

  try {

    const { passengerIncrease, trainReduction } = req.body;

    const baseStress = 70;

    let newStress =
      baseStress +
      passengerIncrease * 0.5 -
      trainReduction * 3;

    if (newStress < 0) newStress = 0;
    if (newStress > 100) newStress = 100;

    const simulation = new Simulation({
      passengerIncrease,
      trainReduction,
      resultStress: newStress
    });

    await simulation.save();

    res.json({
      resultStress: newStress
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Simulation failed"
    });

  }

};


/* Get Simulation History */
const getSimulationHistory = async (req, res) => {

  try {

    const simulations = await Simulation
      .find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.json(simulations);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to fetch simulation history"
    });

  }

};


module.exports = {
  runSimulation,
  getSimulationHistory
};