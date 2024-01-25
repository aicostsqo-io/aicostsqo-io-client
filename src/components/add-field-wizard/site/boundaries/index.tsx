import dynamic from "next/dynamic";

const BoundariesMap = dynamic(() => import("./BoundariesMap"), { ssr: false });

export default BoundariesMap;
