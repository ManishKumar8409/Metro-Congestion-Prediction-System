const Simulation = require("../models/Simulation");

const getAnalytics = async (req, res) => {
  try {

    const { line, time } = req.query;

    let filter = {};

    /* Time filter */
    if (time === "week") {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      filter.createdAt = { $gte: lastWeek };
    }

    if (time === "month") {
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      filter.createdAt = { $gte: lastMonth };
    }

    if (time === "3months") {
      const last3 = new Date();
      last3.setMonth(last3.getMonth() - 3);
      filter.createdAt = { $gte: last3 };
    }

    const simulations = await Simulation.find(filter).sort({ createdAt: -1 });

    const totalSimulations = simulations.length;

    const avgStress =
      simulations.reduce((sum, s) => sum + s.resultStress, 0) /
      (totalSimulations || 1);

    const maxStress = Math.max(...simulations.map(s => s.resultStress), 0);
    const minStress = Math.min(...simulations.map(s => s.resultStress), 0);

    res.json({
      totalSimulations,
      averageStress: avgStress.toFixed(1),
      maxStress,
      minStress,
      simulations
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Analytics fetch failed"
    });

  }
};

module.exports = {
  getAnalytics
};