const express = require("express");
const router = express.Router();

const { getPassengerForecast } = require("../controllers/forecastController");

router.get("/passenger", getPassengerForecast);

module.exports = router;