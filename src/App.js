import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Legend from "./components/Legend";
import HighlightedGeoJson from "./components/HighlightedGeoJson";

const App = () => {
  return (
    <Map center={[37.8, -96]} style={{ height: "100vh" }} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HighlightedGeoJson />
      <Legend />
    </Map>
  );
};

export default App;
