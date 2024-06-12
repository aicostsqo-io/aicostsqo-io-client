import React, { useEffect, useState } from "react";
import { useSiteContext } from "@/contexts/Site";
import axios from "axios";
import ObjectVisualizer, { Urls } from "../common/ObjectVisualizer";
import Loading from "../common/Loading";

const AllRPsVisualization = () => {
  const [urls, setUrls] = useState<Urls | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedRPs, selectedSite } = useSiteContext();

  useEffect(() => {
    const fetchObj = async () => {
      setLoading(true);
      const modifiedRPs = selectedRPs.filter((rp: any) => rp.name !== "RP 0");
      const min = {
        x: modifiedRPs[0].positionX,
        y: modifiedRPs[0].positionY,
        z: modifiedRPs[0].positionZ,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/site`,
        {
          filename: selectedSite.site._id,
          data: modifiedRPs.map((rp: any) => ({
            positionX: rp.positionX - min.x,
            positionY: rp.positionY - min.y,
            positionZ: rp.positionZ - min.z,
            sizeX: rp.sizeX,
            sizeY: rp.sizeY,
            sizeZ: rp.sizeZ,
          })),
        }
      );
      setUrls({ obj: res.data.obj, mtl: res.data.mtl });
      setLoading(false);
    };

    fetchObj();
  }, [selectedRPs, selectedSite]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-row h-full gap-5">
      {urls && <ObjectVisualizer urls={urls} />}
    </div>
  );
};

export default AllRPsVisualization;
