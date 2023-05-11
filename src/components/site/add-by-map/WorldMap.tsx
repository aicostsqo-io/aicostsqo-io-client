import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Circle,
  Polygon,
} from "react-leaflet";
import { LatLng, LatLngExpression } from "leaflet";
import { EditControl } from "react-leaflet-draw";
import { SiteBound } from "@/types/models/site";
import { createSiteBound, getSiteBounds } from "@/api/site";
import { useUserContext } from "@/contexts/User";

const WorldMap = ({next} : any) => {
  const [siteBounds, setSiteBounds] = useState<SiteBound[] | null>(null);
  const [siteBound, setSiteBound] = useState<SiteBound | null>(null);
  const [polygon, setPolygon] = useState<number[][] | null>(null);
  const { currentUser } = useUserContext();

  useEffect(() => {
    getSiteBounds()
      .then((res) => {
        if (res.data.success) {
          setSiteBounds(res.data.siteBounds);
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const position: LatLngExpression = [52.515, -0.09];

  const polygonCreated = (e: any) => {
    let polygon: number[][] = [];
    if (e.layerType === "polygon") {
      const latlngs: Array<LatLng> = e.layer._latlngs[0];
      latlngs.forEach((element, index) => {
        /* console.log(
          `${index} - lat ${index + 1}: ` + element.lat?.toFixed(5),
          `- lng ${index + 1}:` + element.lng?.toFixed(5)
        ); */
        polygon.push([
          Number(element.lat?.toFixed(5)),
          Number(element.lng?.toFixed(5)),
        ]);
      });
      setPolygon(polygon);
    }
  };

  /* const polygon: any = [
    [52.515, -0.09],
    [52.52, -0.1],
    [52.52, -0.12],
    [52.5, -0.12],
  ]; */

  const getPositions = (siteBound: SiteBound) => {
    const indexes:
      | LatLngExpression[]
      | LatLngExpression[][]
      | LatLngExpression[][][] = siteBound.vertexes.map((vertex) => {
      return [vertex.coordX, vertex.coordY];
    });
    return indexes;
  };

  const mapSiteBoundObject = (polygon: number[][]) => {
    const siteBound: SiteBound = {
      siteId: "642fd715840d04775c480fe4",
      mapReferenceSystem: "WGS-84",
      vertexes: polygon.map((vertex, index) => {
        return {
          vertexNumber: index + 1,
          coordX: vertex[0],
          coordY: vertex[1],
        };
      }),
    };
    return siteBound;
  };

  const handleAddSiteBound = () => {
    console.log(polygon);
    next()
    /* createSiteBound(mapSiteBoundObject(polygon!))
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.message); // toastify success
          getSiteBounds()
            .then((res) => {
              if (res.data.success) {
                setSiteBounds(res.data.siteBounds);
              } else {
                console.log(res.data.message);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log(res.data.message); // toastify error
        }
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={12}
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
                circlemarker: true,
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

          {siteBounds &&
            siteBounds.map((siteBound, index) => {
              return (
                <Polygon
                  key={index}
                  pathOptions={{ color: "#00ff00" }}
                  positions={getPositions(siteBound)}
                />
              );
            })}
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={["mt1", "mt2", "mt3"]}
          />
        </MapContainer>

      <div
          className="w-full bg-black text-white text-center cursor-pointer py-2 px-5 text-lg"
          onClick={handleAddSiteBound}
        >
          Add
        </div>
    </div>
  );
};

export default WorldMap;
