const mongoose = require("mongoose");

const metroStationSchema = new mongoose.Schema({
  name: String,
  line: String,
  lat: Number,
  lng: Number
});

module.exports = mongoose.model("MetroStation", metroStationSchema);