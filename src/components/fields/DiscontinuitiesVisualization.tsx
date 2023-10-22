import { assets } from "@/assets/imgs";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import RPInfo from "./RPInfo";
import { useSiteContext } from "@/contexts/Site";
import * as M from "marble-disc";
import { getDiscsByRpId } from "@/api/disc";

const DiscontinuitiesVisualization = () => {
  const { selectedRP, selectedDiscs, setSelectedDiscs } = useSiteContext();
  const marbleRef = useRef(null);
  useEffect(() => {
    if (!!selectedDiscs && selectedDiscs.length > 0) {
      const mrbl = new M.Marble(
        marbleRef.current,
        selectedRP.sizeX,
        selectedRP.sizeY,
        selectedRP.sizeZ
      );
      mrbl.showDiscontinuities(selectedDiscs);
    }
  }, [selectedRP, selectedDiscs]);

  const fetchDiscData = async () => {
    const res = await getDiscsByRpId(selectedRP?._id);
    setSelectedDiscs(res.data.discs);
  };

  useEffect(() => {
    fetchDiscData();
  }, []);

  if (selectedDiscs?.length === 0) return <div>No Disc</div>;

  return (
    <div className="flex flex-row h-full">
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-full">
          <div className="w-full h-full" ref={marbleRef}></div>
        </div>
      </div>
    </div>
  );
};

export default DiscontinuitiesVisualization;
