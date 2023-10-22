import { assets } from "@/assets/imgs";
import Image from "next/image";
import React from "react";
import RPInfo from "./RPInfo";
import { useSiteContext } from "@/contexts/Site";

const DiscontinuitiesVisualization = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="w-full flex justify-center items-center">
        <div className="w-[400px] h-auto ">
          <Image
            src={assets.disc}
            alt=""
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default DiscontinuitiesVisualization;
