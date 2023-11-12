import * as L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";

const position: L.LatLngExpression = [52.524663, -0.111807];
const polylinePositions: L.LatLngExpression[] = [
  [52.527891, -0.104445],
  [52.519745, -0.123102],
  [52.519152, -0.122417],
  [52.527561, -0.10385],
  [52.527056, -0.103507],
  [52.51902, -0.121164],
];
function DiscontinuitiesGPRVisualization() {
  return (
    <MapContainer
      className="w-full h-full"
      center={position}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={["mt1", "mt2", "mt3"]}
      />
      <Polyline pathOptions={{ color: "red" }} positions={polylinePositions} />
    </MapContainer>
  );
}

export default DiscontinuitiesGPRVisualization;
