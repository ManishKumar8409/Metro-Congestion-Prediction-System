const Simulation = require("../models/Simulation");

const getPassengerForecast = async (req, res) => {

  try {

    const data = await Simulation.find().sort({ createdAt: 1 });

    if (data.length === 0) {
      return res.json([]);
    }

    const forecast = data.map((item, index) => ({
      day: index + 1,
      predictedPassengers: Math.round(
        item.passengerIncrease * 50 + Math.random() * 100
      )
    }));

    res.json(forecast);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Forecast failed"
    });

  }

};

module.exports = { getPassengerForecast };