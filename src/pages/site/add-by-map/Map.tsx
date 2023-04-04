import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Polygon,
} from "react-leaflet";

const Map = () => {
  const position: any = [51.51, -0.12];
  const multiPolygon: any = [
    [
      [51.51, -0.14],
      [51.51, -0.12],
      [51.531, -0.11],
      [51.54, -0.17],
    ],
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
      <div className="text-2xl font-bold">Add Site by Map</div>
      <div className="w-2/3 h-2/3">
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={14}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>A pretty &lt;br /&gt; CSS3 popup.</Popup>
          </Marker>

          <Polygon pathOptions={{ color: "red" }} positions={multiPolygon} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
