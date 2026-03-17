const express = require("express");
const router = express.Router();

const { getRoute } = require("../controllers/metroController");

router.get("/route", getRoute);

module.exports = router;