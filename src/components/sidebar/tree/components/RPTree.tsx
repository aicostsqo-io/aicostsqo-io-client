import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";
import RPTreeItem from "./RPTreeItem";
import { useState } from "react";
import RepresentingPrismsMenu from "@/components/common/Menu/RepresentingPrismsMenu";

const initialContextMenu = {
  show: false,
  x: 0,
  y: 0,
};
const RPTree = ({
  siteBoundId,
  rps,
  setPoint,
  site,
  index,
  onRefresh,
}: any) => {
  const { setSelectedRPs } = useSiteContext();
  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  const handleContextMenu = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    const { pageX, pageY } = e;
    setContextMenu({ show: true, x: pageX, y: pageY });
  };

  const closeContextMenu = () => {
    setContextMenu((prev) => ({ ...prev, show: false }));
  };

  const handleClickRpTree = (rps: any) => {
    setPoint("Representing Prisms");
    setSelectedRPs(rps);
  };

  return (
    <TreeItem
      nodeId={`${index + 1}`}
      label={"Representing Prisms"}
      onClick={() => handleClickRpTree(rps)}
      onContextMenu={handleContextMenu}
    >
      {rps?.map((rp: any, key: number) => (
        <RPTreeItem
          key={key}
          rp={rp}
          site={site}
          setPoint={setPoint}
          onRefresh={onRefresh}
        />
      ))}
      {contextMenu.show && (
        <RepresentingPrismsMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          siteBoundId={siteBoundId}
        />
      )}
    </TreeItem>
  );
};

export default RPTree;
