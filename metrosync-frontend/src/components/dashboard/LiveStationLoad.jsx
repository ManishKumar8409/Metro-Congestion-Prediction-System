import { useEffect, useState } from "react";

const LiveStationLoad = () => {

  const [stations, setStations] = useState([
    { name: "Central", load: 40 },
    { name: "City Park", load: 60 },
    { name: "Airport", load: 85 },
    { name: "Tech Hub", load: 55 }
  ]);

  useEffect(() => {

    const interval = setInterval(() => {

      setStations((prev) =>
        prev.map((station) => ({
          ...station,
          load: Math.floor(Math.random() * 100)
        }))
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const getColor = (value) => {
    if (value < 50) return "#22c55e";
    if (value < 80) return "#facc15";
    return "#ef4444";
  };

  return (
    <div className="live-load-box">

      <h3>Live Station Load</h3>

      {stations.map((station, index) => (

        <div key={index} className="station-row">

          <span>{station.name}</span>

          <div className="load-bar">

            <div
              className="load-fill"
              style={{
                width: `${station.load}%`,
                background: getColor(station.load)
              }}
            />

          </div>

          <span>{station.load}%</span>

        </div>

      ))}

    </div>
  );
};

export default LiveStationLoad;