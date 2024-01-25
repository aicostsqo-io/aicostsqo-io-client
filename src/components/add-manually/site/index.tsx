import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });

export default WorldMap;
