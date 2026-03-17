const MetroStation = require("../models/MetroStation");

const getRoute = async (req, res) => {

  try {

    const { from, to } = req.query;

    const stations = await MetroStation.find();

    const start = stations.find(s => s.name === from);
    const end = stations.find(s => s.name === to);

    if (!start || !end) {
      return res.status(404).json({ message: "Station not found" });
    }

    const route = [start, end];

    res.json({
      from: start.name,
      to: end.name,
      route
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Route calculation failed"
    });

  }

};

module.exports = { getRoute };