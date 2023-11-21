import { getRpsBySiteId } from "@/api/gpr";
import { useSiteContext } from "@/contexts/Site";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import { Fragment, useEffect, useState } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";

const polylinePositions: L.LatLngExpression[] = [
  [52.527891, -0.104445],
  [52.519745, -0.123102],
  [52.519152, -0.122417],
  [52.527561, -0.10385],
  [52.527056, -0.103507],
  [52.51902, -0.121164],
];
function DiscontinuitiesGPRVisualization() {
  const [gprs, setGprs] = useState<any[]>();
  const [gprProfiles, setGprProfiles] = useState<any>();
  const [gprDiscs, setGprDiscs] = useState<any[]>();
  const [position, setPosition] = useState<L.LatLngExpression>();
  const { selectedSite } = useSiteContext();
  useEffect(() => {
    getRpsBySiteId(selectedSite.site._id)
      .then((res) => {
        setGprs(res.data.result.gprs);
        // setGprProfiles(res.data.result.gprProfiles);
        const ress = formatAndSetProfiles(
          res.data.result.gprProfiles,
          res.data.result.gprs
        );
        setPosition(ress.longs[0][0] as L.LatLngExpression);
        console.log("bune", ress.longs[0][0]);
        setGprProfiles(ress);
        console.log(ress);
        setGprDiscs(res.data.result.gprDiscs);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedSite]);

  const formatAndSetProfiles = (profiles: any[], gprs: any[]) => {
    const newArr = groupBy(profiles, "rectangleLineNumber");
    console.log("newArr: ", newArr);
    const keys = Object.keys(newArr);
    const formattedLongArr: any[] = [];
    const formattedTransArr: any[] = [];
    for (let index = 0; index < keys.length; index++) {
      const currentProfiles = newArr[keys[index]];
      if (currentProfiles.length == 0) continue;
      const gpr = gprs.find(
        (gpr) => gpr.rectangleNumber == currentProfiles[0].rectangleLineNumber
      );
      const longitudinalProfiles = currentProfiles
        .filter((prof: any) => prof.profileType == "Longitudinal")
        .sort((a: any, b: any) => a.numberOfProfile - b.numberOfProfile);
      const transversalProfiles = currentProfiles
        .filter((prof: any) => prof.profileType == "Traversal")
        .sort((a: any, b: any) => a.numberOfProfile - b.numberOfProfile);

      for (let index = 0; index < longitudinalProfiles.length; index++) {
        const profile = longitudinalProfiles[index];
        const nextProfile =
          index + 1 < longitudinalProfiles.length
            ? longitudinalProfiles[index + 1]
            : null;
        formattedLongArr.push([
          [profile.startingVertexX, profile.startingVertexY],
          [profile.endVertexX, profile.endVertexY],
        ]);
        if (gpr.shape != "Line" && nextProfile) {
          formattedLongArr.push([
            [profile.endVertexX, profile.endVertexY],
            [nextProfile.startingVertexX, nextProfile.startingVertexY],
          ]);
        }
      }
      for (let index = 0; index < transversalProfiles.length; index++) {
        const profile = transversalProfiles[index];
        const nextProfile =
          index + 1 < transversalProfiles.length
            ? transversalProfiles[index + 1]
            : null;
        formattedTransArr.push([
          [profile.startingVertexX, profile.startingVertexY],
          [profile.endVertexX, profile.endVertexY],
        ]);
        if (gpr.shape != "Line" && nextProfile) {
          formattedTransArr.push([
            [profile.endVertexX, profile.endVertexY],
            [nextProfile.startingVertexX, nextProfile.startingVertexY],
          ]);
        }
      }
    }
    return {
      longs: formattedLongArr,
      transs: formattedTransArr,
    };
  };

  var groupBy = function (xs: any, key: any) {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  return (
    <>
      {position && (
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

          {/* {gprProfiles?.map((prof, index) => {
        return (
          <Fragment key={index}>
            <Polyline
              pathOptions={{
                color: prof.profileType == "Traversal" ? "red" : "black",
              }}
              positions={[
                [prof.startingVertexX, prof.startingVertexY],
                [prof.endVertexX, prof.endVertexY],
              ]}
            />
          </Fragment>
        );
      })} */}
          {gprProfiles?.longs.map((prof: any, index: any) => {
            return (
              <Fragment key={index}>
                <Polyline
                  pathOptions={{
                    color: "red",
                    lineJoin: "miter",
                  }}
                  positions={prof}
                />
              </Fragment>
            );
          })}
          {gprProfiles?.transs.map((prof: any, index: any) => {
            return (
              <Fragment key={index}>
                <Polyline
                  pathOptions={{
                    color: "black",
                  }}
                  positions={prof}
                />
              </Fragment>
            );
          })}
          {/* <Polyline pathOptions={{ color: "red" }} positions={polylinePositions} /> */}
        </MapContainer>
      )}
    </>
  );
}

export default DiscontinuitiesGPRVisualization;
