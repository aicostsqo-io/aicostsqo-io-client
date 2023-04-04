import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  useMapEvent,
  Circle,
} from "react-leaflet";
import { LatLng, LatLngExpression, Map } from "leaflet";
import { EditControl } from "react-leaflet-draw";

const WorldMap = () => {
  const position: LatLngExpression = [51.23, -0.68];

  const polygonCreated = (e: any) => {
    const latlngs: Array<LatLng> = e.layer._latlngs[0];
    latlngs.forEach((element, index) => {
      console.log(
        `lat ${index + 1}: ` + element.lat?.toFixed(5),
        `lng ${index + 1}:` + element.lng?.toFixed(5)
      );
    });
  };
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
          <FeatureGroup>
            <EditControl
              position="topright"
              draw={{
                rectangle: false,
                circle: false,
                polyline: false,
                marker: false,
                circlemarker: false,
                polygon: {
                  shapeOptions: {
                    color: "#ff0000",
                  },
                },
              }}
              onCreated={polygonCreated}
            />
            <Circle center={[51.51, -0.06]} radius={200} />
          </FeatureGroup>
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={["mt1", "mt2", "mt3"]}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default WorldMap;
