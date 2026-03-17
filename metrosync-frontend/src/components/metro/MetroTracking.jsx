import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { stations } from "../../data/metroData";

const MetroTracking = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const passengerLoad = [30, 55, 80, 45];

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stations.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  const currentStation = stations[currentIndex];
  const nextStation = stations[(currentIndex + 1) % stations.length];

  const arrivalTime = (currentIndex + 1) * 2;

  return (
    <div>

      <MapContainer
        center={[stations[0].lat, stations[0].lng]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline
          positions={stations.map(s => [s.lat, s.lng])}
          color="blue"
        />

        <Marker position={[currentStation.lat, currentStation.lng]}>
          <Popup>
            🚆 Train Location<br/>
            Station: {currentStation.name}<br/>
            Passenger Load: {passengerLoad[currentIndex]}%
          </Popup>
        </Marker>

      </MapContainer>

      <div style={{marginTop:"20px"}}>

        <h3>Next Station Prediction</h3>

        <p>
          Next Station: <b>{nextStation.name}</b>
        </p>

        <p>
          Arrival in: <b>{arrivalTime} minutes</b>
        </p>

        <p>
          Passenger Load: <b>{passengerLoad[currentIndex]}%</b>
        </p>

      </div>

    </div>
  );
};

export default MetroTracking;