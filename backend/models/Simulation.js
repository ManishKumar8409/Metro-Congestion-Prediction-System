const mongoose = require("mongoose");

const simulationSchema = new mongoose.Schema({

  passengerIncrease: Number,

  trainReduction: Number,

  resultStress: Number,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Simulation", simulationSchema);