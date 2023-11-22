import { getRpsBySiteId } from "@/api/gpr";
import { useSiteContext } from "@/contexts/Site";
import L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet/dist/leaflet.css";
import { Fragment, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { PolylineDecorator } from "../../common/Map/PolylineDecorator";
import { FormattedProfile, MapProfile } from "@/types/models/formattedProfile";

function DiscontinuitiesGPRVisualization() {
  const [gprProfiles, setGprProfiles] = useState<MapProfile>();
  const [position, setPosition] = useState<L.LatLngExpression>();
  const { selectedSite } = useSiteContext();
  useEffect(() => {
    getRpsBySiteId(selectedSite.site._id)
      .then((res) => {
        const ress: MapProfile = formatProfiles(
          res.data.result.gprProfiles,
          res.data.result.gprs
        );
        setPosition(ress.longitudes[0].startCoords);
        setGprProfiles(ress);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedSite]);

  const formatProfiles = (profiles: any[], gprs: any[]): MapProfile => {
    const groupedProfiles = groupBy(profiles, "rectangleLineNumber");
    const rectangles = Object.keys(groupedProfiles);
    const formattedLongitudeProfiles: FormattedProfile[] = [];
    const formattedTransversalProfiles: FormattedProfile[] = [];
    for (let i = 0; i < rectangles.length; i++) {
      const currentProfiles = groupedProfiles[rectangles[i]];
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
      formattedLongitudeProfiles.push(
        ...iterateProfiles(longitudinalProfiles, gpr, "red")
      );
      formattedTransversalProfiles.push(
        ...iterateProfiles(transversalProfiles, gpr, "black")
      );
    }
    return {
      longitudes: formattedLongitudeProfiles,
      transversals: formattedTransversalProfiles,
    } as MapProfile;
  };

  const groupBy = function (xs: any, key: any) {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const iterateProfiles = (arr: any[], gpr: any, color: string) => {
    let res: FormattedProfile[] = [];
    for (let index = 0; index < arr.length; index++) {
      const profile = arr[index];
      const nextProfile = index + 1 < arr.length ? arr[index + 1] : null;
      res.push({
        color: gpr.shape == "Line" ? "orange" : color,
        numberOfProfile: profile.numberOfProfile,
        startCoords: [profile.startingVertexX, profile.startingVertexY],
        endCoords: [profile.endVertexX, profile.endVertexY],
      });
      if (gpr.shape != "Line" && nextProfile) {
        res.push({
          color,
          numberOfProfile: null,
          startCoords: [profile.endVertexX, profile.endVertexY],
          endCoords: [nextProfile.startingVertexX, nextProfile.startingVertexY],
        });
      }
    }
    return res;
  };

  return (
    <>
      {position && (
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={18}
          scrollWheelZoom={true}
          maxZoom={30}
        >
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={["mt1", "mt2", "mt3"]}
          />
          {gprProfiles?.longitudes.map(
            (prof: FormattedProfile, index: number) => {
              return (
                <Fragment key={index}>
                  <PolylineDecorator
                    positions={prof}
                    pathStyle={{
                      color: prof.color,
                    }}
                  />
                </Fragment>
              );
            }
          )}
          {gprProfiles?.transversals.map(
            (prof: FormattedProfile, index: number) => {
              return (
                <Fragment key={index}>
                  <PolylineDecorator
                    positions={prof}
                    pathStyle={{
                      color: prof.color,
                    }}
                  />
                </Fragment>
              );
            }
          )}
        </MapContainer>
      )}
    </>
  );
}

export default DiscontinuitiesGPRVisualization;
