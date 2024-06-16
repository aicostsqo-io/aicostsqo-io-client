import React, { useEffect, useState } from "react";
import { useSiteContext } from "@/contexts/Site";
import axios from "axios";
import { getDiscsByRpId } from "@/api/disc";
import ObjectVisualizer, { Urls } from "../common/ObjectVisualizer";
import Loading from "../common/Loading";

const VirtualExtended3DRPsVisualization = () => {
  const [urls, setUrls] = useState<Urls | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedRP } = useSiteContext();

  useEffect(() => {
    const fetchObj = async (discs: any) => {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/extend`,
        {
          filename: selectedRP._id,
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          sizeX: selectedRP.sizeX,
          sizeY: selectedRP.sizeY,
          sizeZ: selectedRP.sizeZ,
          data: discs.map((rp: any) => ({
            dip: rp.dip,
            dipDirection: rp.dipDirect,
            positionX: rp.pX,
            positionY: rp.pY,
            positionZ: rp.pZ,
          })),
        }
      );
      setUrls({ obj: res.data.obj, mtl: res.data.mtl });
      setLoading(false);
    };
    const fetchDiscData = async () => {
      const res = await getDiscsByRpId(selectedRP?._id);
      await fetchObj(res.data.discs);
    };
    fetchDiscData();
  }, [selectedRP]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-row h-full gap-5">
      {urls && <ObjectVisualizer urls={urls} />}
    </div>
  );
};

export default VirtualExtended3DRPsVisualization;
