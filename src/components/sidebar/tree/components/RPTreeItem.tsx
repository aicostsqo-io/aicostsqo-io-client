import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";

const RPTreeItem = ({ rp, site, setPoint }: any) => {
  const { setSelectedRP, setSelectedDiscs } = useSiteContext();
  const { expanded, setExpanded } = useTreeContext();
  const { calculatePolyhedrons, generateVirtual1DExtendedRPs } = site;
  const handleClickRpTreeItem = (rp: any) => {
    setPoint("RPItem");
    setSelectedRP(rp);
    const newExpanded = expanded.filter(
      (item: any) => !item.startsWith("RPNode")
    );
    newExpanded.push("RPNode" + rp?._id);
    setExpanded(newExpanded);
  };
  return (
    <TreeItem
      nodeId={"RPNode" + rp?._id}
      label={rp?.name}
      onClick={() => handleClickRpTreeItem(rp)}
    >
      <TreeItem
        nodeId={rp?._id + 1}
        label={"RP"}
        onClick={() => {
          setPoint("RP");
          setSelectedDiscs([]);
        }}
      />
      <TreeItem
        nodeId={rp?._id + 2}
        label={"Discontinuities (scanline measure)"}
        onClick={() => {
          setPoint("Discontinuities (scanline measure)");
          // setSelectedDiscs([]);
        }}
      />
      {calculatePolyhedrons || true ? (
        <TreeItem
          nodeId={rp?._id + 3}
          label={"Polyhedron"}
          onClick={() => {
            setPoint("Polyhedron");
          }}
        />
      ) : null}
      {generateVirtual1DExtendedRPs || true ? (
        <TreeItem
          nodeId={rp?._id + 4}
          label={"Extended (1D)"}
          onClick={() => {
            setPoint("Extended (1D)");
          }}
        />
      ) : null}
      {generateVirtual1DExtendedRPs || true ? (
        <TreeItem
          nodeId={rp?._id + 5}
          label={"Extended (3D)"}
          onClick={() => {
            setPoint("Extended (3D)");
          }}
        />
      ) : null}
      <TreeItem
        nodeId={rp?._id + 6}
        label={"DFN"}
        onClick={() => {
          setPoint("DFN");
        }}
      />
      {/* {
                  field?.rps?.discs?.length > 0 ? <DiscTreeItem discs={field?.rps?.discs} /> : <TreeItem nodeId={"199"} label={"No Discs"} /> 
                } */}
    </TreeItem>
  );
};

export default RPTreeItem;
