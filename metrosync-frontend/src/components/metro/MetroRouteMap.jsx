import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { useState } from "react";
import { metroStations } from "../../data/metroStations";
import "leaflet/dist/leaflet.css";

const MetroRouteMap = () => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const getStation = (name) =>
    metroStations.find((s) => s.name === name);

  const start = getStation(from);
  const end = getStation(to);

  const route =
    start && end
      ? [
          [start.lat, start.lng],
          [end.lat, end.lng]
        ]
      : [];

  return (
    <div style={{ display: "flex", gap: "20px" }}>

      {/* Modern Search Panel */}
      <div className="metro-search">

        <h3>🚇 Metro Route Finder</h3>

        <div className="input-group">
          <label>From Station</label>
          <input
            list="stations"
            placeholder="Select start station"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>To Station</label>
          <input
            list="stations"
            placeholder="Select destination"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <datalist id="stations">
          {metroStations.map((s, i) => (
            <option key={i} value={s.name} />
          ))}
        </datalist>

        <button className="route-btn">
          Show Route
        </button>

      </div>

      {/* Map */}
      <MapContainer
        center={[28.643, 77.221]}
        zoom={12}
        style={{ height: "450px", width: "100%", borderRadius: "10px" }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {start && <Marker position={[start.lat, start.lng]} />}
        {end && <Marker position={[end.lat, end.lng]} />}

        {route.length > 0 && (
          <Polyline positions={route} color="#2563eb" weight={5} />
        )}

      </MapContainer>

    </div>
  );
};

export default MetroRouteMap;