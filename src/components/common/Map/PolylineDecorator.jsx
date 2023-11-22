import L from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-polylinedecorator/dist/leaflet.polylineDecorator";

export function PolylineDecorator({ positions, pathStyle }) {
  const map = useMap();
  const arrow = [
    {
      offset: "50%",
      repeat: "50%",
      symbol: L.Symbol.arrowHead({
        pixelSize: 5,
        polygon: true,
        pathOptions: { stroke: true, color: pathStyle.color },
      }),
    },
  ];

  useEffect(() => {
    if (!map) return;
    const polyLine = L.polyline([
      positions.startCoords,
      positions.endCoords,
    ]).setStyle(pathStyle);
    const marker = L.marker(positions.startCoords, {
      icon: L.divIcon({
        html: `<b style="color:${pathStyle.color};padding:10px">${positions.numberOfProfile}</b>`,
        className: "text-xs",
      }),
    });
    const polyLineDecorator = L.polylineDecorator(
      [positions.startCoords, positions.endCoords],
      {
        patterns: arrow,
      }
    );
    const featureGroup = [polyLine, polyLineDecorator];
    if (positions.numberOfProfile) featureGroup.push(marker);
    L.featureGroup(featureGroup)
      .on("mouseover", (e) => {
        e.target.setStyle({
          color: "yellow",
        });
      })
      .on("mouseout", (e) => {
        e.target.setStyle({
          color: pathStyle.color,
        });
      })
      .addTo(map);
  }, [map]);

  return null;
}
