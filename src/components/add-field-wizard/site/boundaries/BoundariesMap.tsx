import { LatLngExpression } from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";

type BoundariesMapProps = {
  center: LatLngExpression;
  positions: LatLngExpression[];
};

const BoundariesMap = ({ center, positions }: BoundariesMapProps) => {
  return (
    <MapContainer
      className="w-full h-full"
      center={center}
      zoom={12}
      scrollWheelZoom={true}
    >
      <Polygon pathOptions={{ color: "#00ff00" }} positions={positions} />
      <TileLayer
        url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={["mt1", "mt2", "mt3"]}
      />
    </MapContainer>
  );
};

export default BoundariesMap;
