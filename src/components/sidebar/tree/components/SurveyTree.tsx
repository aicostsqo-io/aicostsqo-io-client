import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";
import RPTreeItem from "./RPTreeItem";

const SurveyTree = ({ setPoint, site }: any) => {
  const { setSelectedRPs } = useSiteContext();

  return (
    <TreeItem
      nodeId={`Field Survey`}
      label={"Field Survey"}
      onClick={() => setPoint("Field Survey")}
    ></TreeItem>
  );
};

export default SurveyTree;
