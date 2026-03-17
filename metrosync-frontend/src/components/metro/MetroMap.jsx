import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const stations = [
  [28.6139, 77.2090], // Station 1
  [28.6200, 77.2150], // Station 2
  [28.6260, 77.2210], // Station 3
  [28.6310, 77.2270]  // Station 4
];

const MetroMap = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stations.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <MapContainer
      center={stations[0]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* metro route */}
      <Polyline positions={stations} color="blue" />

      {/* moving metro */}
      <Marker position={stations[index]}>
        <Popup>Metro Current Location</Popup>
      </Marker>

    </MapContainer>
  );
};

export default MetroMap;