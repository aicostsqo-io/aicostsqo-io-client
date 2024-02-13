import React, { useEffect, useState } from "react";
import { useSiteContext } from "@/contexts/Site";
import { getDiscsByRpId } from "@/api/disc";
import axios from "axios";
import ObjectVisualizer, { Urls } from "../common/ObjectVisualizer";
import Loading from "../common/Loading";

const DiscontinuitiesVisualization = () => {
  const [urls, setUrls] = useState<Urls | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedRP } = useSiteContext();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await getDiscsByRpId(selectedRP?._id);
      await fetchObj(res.data.discs);
      setLoading(false);
    };

    const fetchObj = async (discs: any) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/disc`,
        {
          filename: selectedRP._id,
          positionX: selectedRP.positionX,
          positionY: selectedRP.positionY,
          positionZ: selectedRP.positionZ,
          sizeX: selectedRP.sizeX,
          sizeY: selectedRP.sizeY,
          sizeZ: selectedRP.sizeZ,
          data: discs.map((d: any) => ({
            dip: d.dip,
            dipDirection: d.dipDirect,
            positionX: d.pX,
            positionY: d.pY,
            positionZ: d.pZ,
          })),
        }
      );
      setUrls({ obj: res.data.obj, mtl: res.data.mtl });
    };

    selectedRP && loadData();
  }, [selectedRP]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-row h-full gap-5">
      {urls && <ObjectVisualizer urls={urls} />}
    </div>
  );
};

export default DiscontinuitiesVisualization;
