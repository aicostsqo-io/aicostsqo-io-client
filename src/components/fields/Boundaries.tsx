import { useSiteContext } from "@/contexts/Site";
import { SiteBound, Vertex } from "@/types/models/site";
import { LatLngExpression } from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import BoundariesMap from "../add-field-wizard/site/boundaries";

const Boundaries = () => {
  const { selectedSite } = useSiteContext();
  const [vertexes, setVertexes] = useState<LatLngExpression[]>();

  useEffect(() => {
    getPositions(selectedSite.siteBound);
  }, [selectedSite]);

  const getPositions = (siteBound: SiteBound) => {
    const indexes: LatLngExpression[] = siteBound.vertexes.map(
      (vertex: Vertex) => {
        return [vertex.coordX, vertex.coordY];
      }
    );
    setVertexes(indexes);
  };

  return (
    <div className="h-full flex items-center justify-center">
      {vertexes && <BoundariesMap center={vertexes[0]} positions={vertexes} />}
    </div>
  );
};

export default Boundaries;
