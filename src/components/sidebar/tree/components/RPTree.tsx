import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";
import RPTreeItem from "./RPTreeItem";

const RPTree = ({ rps, setPoint, site, index }: any) => {
  const { setSelectedRPs } = useSiteContext();

  const handleClickRpTree = (rps: any) => {
    setPoint("Representing Prisms");
    setSelectedRPs(rps);
  };

  return (
    <TreeItem
      nodeId={`${index + 1}`}
      label={"Representing Prisms"}
      onClick={() => handleClickRpTree(rps)}
    >
      {rps?.map((rp: any, index2: number) => (
        <RPTreeItem key={index2} rp={rp} site={site} setPoint={setPoint} />
      ))}
    </TreeItem>
  );
};

export default RPTree;
