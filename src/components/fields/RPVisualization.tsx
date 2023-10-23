import React, { useEffect, useRef } from "react";
import RPInfo from "./RPInfo";
import * as M from "marble-disc";
import { useSiteContext } from "@/contexts/Site";

const RPVisualization = () => {
  const { selectedRP } = useSiteContext();
  const marbleRef = useRef(null);
  useEffect(() => {
    new M.Marble(
      marbleRef.current,
      selectedRP.sizeX,
      selectedRP.sizeY,
      selectedRP.sizeZ
    );
  }, [selectedRP]);

  useEffect(() => {
    return () => {
      marbleRef.current = null;
      console.warn("çıkıldı ve temizlendi");
    };
  }, []);

  return (
    <div className="flex flex-row h-full gap-5">
      <div className="w-3/4 flex justify-center items-center">
        <div className="w-full h-full">
          <div className="w-full h-full" ref={marbleRef}></div>
        </div>
      </div>
      <RPInfo rp={selectedRP} />
    </div>
  );
};

export default RPVisualization;
