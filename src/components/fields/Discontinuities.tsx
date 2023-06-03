import { assets } from "@/assets/imgs";
import Image from "next/image";
import React from "react";
import RPInfo from "./RPInfo";
import { useSiteContext } from "@/contexts/Site";

const Discontinuities = () => {
  const { selectedRP } = useSiteContext();
  return (
    <div className="flex flex-row h-full">
      <div className="w-3/4 flex justify-center items-center">
        <div className="w-[400px] h-[400px]">
          <Image
            src={assets.disc}
            alt=""
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
      <RPInfo rp={selectedRP} />
    </div>
  );
};

export default Discontinuities;
