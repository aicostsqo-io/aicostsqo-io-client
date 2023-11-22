import dynamic from "next/dynamic";

const DiscontinuitiesGPRVisualization = dynamic(
  () => import("./DiscontinuitiesGPRVisualization"),
  { ssr: false }
);

export default DiscontinuitiesGPRVisualization;
