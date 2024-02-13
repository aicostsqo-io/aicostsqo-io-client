import React, { useEffect, useState } from "react";
import { useSiteContext } from "@/contexts/Site";
import axios from "axios";
import ObjectVisualizer, { Urls } from "../common/ObjectVisualizer";
import Loading from "../common/Loading";

const RPVisualization = () => {
  const [urls, setUrls] = useState<Urls | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedRP } = useSiteContext();

  useEffect(() => {
    const fetchObj = async () => {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/rp`,
        {
          filename: selectedRP._id,
          positionX: selectedRP.positionX,
          positionY: selectedRP.positionY,
          positionZ: selectedRP.positionZ,
          sizeX: selectedRP.sizeX,
          sizeY: selectedRP.sizeY,
          sizeZ: selectedRP.sizeZ,
        }
      );
      setUrls({ obj: res.data.obj, mtl: res.data.mtl });
      setLoading(false);
    };

    fetchObj();
  }, [selectedRP]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-row h-full gap-5">
      {urls && <ObjectVisualizer urls={urls} />}
    </div>
  );
};

export default RPVisualization;
