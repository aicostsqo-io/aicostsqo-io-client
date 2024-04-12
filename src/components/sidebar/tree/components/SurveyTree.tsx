import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";
import RPTreeItem from "./RPTreeItem";

const SurveyTree = ({ setPoint, site }: any) => {
  const { setSelectedRPs } = useSiteContext();

  return (
    <TreeItem
      nodeId={`Field Survey` + site?._id}
      label={"Field Survey"}
      onClick={() => setPoint("Field Survey")}
    >
      <TreeItem
        nodeId={"Field Survey - Scanline"}
        label={"Scanline"}
        onClick={() => setPoint("Field Survey - Scanline")}
      />
      <TreeItem
        nodeId={"Field Survey - Joint Sets"}
        label={"Joint Sets"}
        onClick={() => setPoint("Field Survey - Joint Sets")}
      />
      <TreeItem
        nodeId={"Field Survey - Drilling" + site?._id}
        label={"Drilling"}
        onClick={() => setPoint("Field Survey - Drilling")}
      >
        <TreeItem
          nodeId={"Field Survey - Televiewer"}
          label={"Televiewer"}
          onClick={() => setPoint("Field Survey - Televiewer")}
        />
        <TreeItem
          nodeId={"Field Survey - Core drilling"}
          label={"Core drilling"}
          onClick={() => setPoint("Field Survey - Core drilling")}
        />
        <TreeItem
          nodeId={"Field Survey - Borehole"}
          label={"Borehole"}
          onClick={() => setPoint("Field Survey - Borehole")}
        />
      </TreeItem>
      <TreeItem
        nodeId={"Field Survey - Lidar"}
        label={"Lidar"}
        onClick={() => setPoint("Field Survey - Lidar")}
      />
      <TreeItem
        nodeId={"Field Survey - Ground Penetrating Radar (GPR)" + site?._id}
        label={"Ground Penetrating Radar (GPR)"}
        onClick={() =>
          setPoint("Field Survey - Ground Penetrating Radar (GPR)")
        }
      >
        <TreeItem
          nodeId={"Field Survey - Profiles"}
          label={"Profiles"}
          onClick={() => setPoint("Field Survey - Profiles")}
        />
        <TreeItem
          nodeId={"Field Survey - Main Crack And Crack Zones"}
          label={"Main Crack And Crack Zones"}
          onClick={() => setPoint("Field Survey - Main Crack And Crack Zones")}
        />
      </TreeItem>
      <TreeItem
        nodeId={"Field Survey - Magnetometry"}
        label={"Magnetometry"}
        onClick={() => setPoint("Field Survey - Magnetometry")}
      />
      <TreeItem
        nodeId={"Field Survey - Resistivity"}
        label={"Resistivity"}
        onClick={() => setPoint("Field Survey - Resistivity")}
      />
      <TreeItem
        nodeId={"Field Survey - Seismic"}
        label={"Seismic"}
        onClick={() => setPoint("Field Survey - Seismic")}
      />
    </TreeItem>
  );
};

export default SurveyTree;
