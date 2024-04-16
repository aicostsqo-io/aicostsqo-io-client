import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";
import RPTreeItem from "./RPTreeItem";
import SeismicMenu from "@/components/common/Menu/SeismicMenu";
import { useState } from "react";
import ScanlineMenu from "@/components/common/Menu/ScanlineMenu";
import JointSetsMenu from "@/components/common/Menu/JointSetsMenu";
import LidarMenu from "@/components/common/Menu/LidarMenu";
import GPRMenu from "@/components/common/Menu/GPRMenu";
import MagnetometryMenu from "@/components/common/Menu/MagnetometryMenu";
import ResistivityMenu from "@/components/common/Menu/ResistivityMenu";
import DrillingMenu from "@/components/common/Menu/DrillingMenu";

const initialContextMenu = {
  show: false,
  x: 0,
  y: 0,
  key: "",
};
const SurveyTree = ({ setPoint, site }: any) => {
  const { setSelectedRPs } = useSiteContext();
  const { _id } = site;

  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  const handleContextMenu = (
    e: React.MouseEvent<Element, MouseEvent>,
    key: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const { pageX, pageY } = e;
    setContextMenu({ show: true, x: pageX, y: pageY, key });
  };

  const closeContextMenu = () => {
    setContextMenu((prev) => ({ ...prev, show: false }));
  };

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
        onContextMenu={(e) => handleContextMenu(e, "Field Survey - Scanline")}
      />
      <TreeItem
        nodeId={"Field Survey - Joint Sets"}
        label={"Joint Sets"}
        onClick={() => setPoint("Field Survey - Joint Sets")}
        onContextMenu={(e) => handleContextMenu(e, "Field Survey - Joint Sets")}
      />
      <TreeItem
        nodeId={"Field Survey - Drilling"}
        label={"Drilling"}
        onClick={() => setPoint("Field Survey - Drilling")}
        onContextMenu={(e) => handleContextMenu(e, "Field Survey - Drilling")}
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
        onContextMenu={(e) => handleContextMenu(e, "Field Survey - Lidar")}
      />
      <TreeItem
        nodeId={"Field Survey - Ground Penetrating Radar (GPR)" + site?._id}
        label={"Ground Penetrating Radar (GPR)"}
        onClick={() =>
          setPoint("Field Survey - Ground Penetrating Radar (GPR)")
        }
        onContextMenu={(e) =>
          handleContextMenu(e, "Field Survey - Ground Penetrating Radar (GPR)")
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
        onContextMenu={(e) =>
          handleContextMenu(e, "Field Survey - Magnetometry")
        }
      />
      <TreeItem
        nodeId={"Field Survey - Resistivity"}
        label={"Resistivity"}
        onClick={() => setPoint("Field Survey - Resistivity")}
        onContextMenu={(e) =>
          handleContextMenu(e, "Field Survey - Resistivity")
        }
      />
      <TreeItem
        nodeId={"Field Survey - Seismic"}
        label={"Seismic"}
        onClick={() => setPoint("Field Survey - Seismic")}
        onContextMenu={(e) => handleContextMenu(e, "Field Survey - Seismic")}
      />
      {contextMenu.show && contextMenu.key === "Field Survey - Scanline" ? (
        <ScanlineMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
      {contextMenu.show && contextMenu.key === "Field Survey - Joint Sets" ? (
        <JointSetsMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
      {contextMenu.show && contextMenu.key === "Field Survey - Lidar" ? (
        <LidarMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
      {contextMenu.show &&
      contextMenu.key === "Field Survey - Ground Penetrating Radar (GPR)" ? (
        <GPRMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
      {contextMenu.show && contextMenu.key === "Field Survey - Magnetometry" ? (
        <MagnetometryMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
      {contextMenu.show && contextMenu.key === "Field Survey - Resistivity" ? (
        <ResistivityMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
      {contextMenu.show && contextMenu.key === "Field Survey - Seismic" ? (
        <SeismicMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
      {contextMenu.show && contextMenu.key === "Field Survey - Drilling" ? (
        <DrillingMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteId={_id}
        />
      ) : null}
    </TreeItem>
  );
};

export default SurveyTree;
