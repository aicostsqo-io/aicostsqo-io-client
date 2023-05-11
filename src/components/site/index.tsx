import { useRouter } from "next/router";
import React from "react";

const Site = () => {
  const router = useRouter();
  return (
    <div className="text-center">
      <div className="font-bold text-2xl mb-5">ADD SITE</div>
      <button
        className="bg-black py-2 px-3 text-white mr-5"
        onClick={() => router.push("/site/add-by-map")}
      >
        ADD by MAP
      </button>
      <button
        className="bg-black py-2 px-3 text-white"
        onClick={() => router.push("/site/add-manuel")}
      >
        ADD MANUEL
      </button>
    </div>
  );
};

export default Site;
