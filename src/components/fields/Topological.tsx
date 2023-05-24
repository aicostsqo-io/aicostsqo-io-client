import { assets } from "@/assets/imgs";
import Image from "next/image";
import React from "react";

const Topological = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-[400px] h-[400px]">
        <Image
          src={assets.topological}
          alt=""
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Topological;
