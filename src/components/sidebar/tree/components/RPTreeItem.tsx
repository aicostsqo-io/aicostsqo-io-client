import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { hasExactKey } from "@/utils";
import { TreeItem } from "@mui/lab";
import { useRouter } from "next/router";

const RPTreeItem = ({ rp, site, setPoint }: any) => {
  const { setSelectedRP, setSelectedDiscs } = useSiteContext();
  const { expanded, setExpanded } = useTreeContext();
  const { calculatePolyhedrons, generateVirtual1DExtendedRPs } = site;
  const router = useRouter();
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
      label={rp?.name === "RP 0" ? rp.name + " (Root / Genesis)" : rp?.name}
      onClick={() => handleClickRpTreeItem(rp)}
    >
      {hasExactKey(router.query, "useNewTree") ? (
        <>
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
            label={"Discontinuities (All)"}
            onClick={() => {
              setPoint("Discontinuities (All)");
              // setSelectedDiscs([]);
            }}
          >
            <TreeItem
              nodeId={rp?._id + 3}
              label={"Scanline"}
              onClick={() => {
                setPoint("Scanline");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 4}
              label={"Joint Sets"}
              onClick={() => {
                setPoint("Joint Sets");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 5}
              label={"Drilling (All)"}
              onClick={() => {
                setPoint("Discontinuities (Drilling)");
              }}
            >
              <TreeItem
                nodeId={rp?._id + 6}
                label={"Televiewer"}
                onClick={() => {
                  setPoint("Televiewer");
                }}
              />
              <TreeItem
                nodeId={rp?._id + 7}
                label={"Core drilling"}
                onClick={() => {
                  setPoint("Core drilling");
                }}
              />
              <TreeItem
                nodeId={rp?._id + 8}
                label={"Borehole"}
                onClick={() => {
                  setPoint("Borehole");
                }}
              />
            </TreeItem>
            <TreeItem
              nodeId={rp?._id + 9}
              label={"Lidar"}
              onClick={() => {
                setPoint("Lidar");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 10}
              label={"Ground Penetrating Radar (GPR)"}
              onClick={() => {
                setPoint("Ground Penetrating Radar (GPR)");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 11}
              label={"Magnetometric"}
              onClick={() => {
                setPoint("Magnetometric");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 12}
              label={"Resistivity"}
              onClick={() => {
                setPoint("Resistivity");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 13}
              label={"Seismic"}
              onClick={() => {
                setPoint("Seismic");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 14}
              label={"1D Extended (Virtual Representative Prisms)"}
              onClick={() => {
                setPoint("1D Extended (Virtual Representative Prisms)");
              }}
            />
            <TreeItem
              nodeId={rp?._id + 15}
              label={"DFN"}
              onClick={() => {
                setPoint("DFN");
              }}
            >
              <TreeItem
                nodeId={rp?._id + 13}
                label={"Show"}
                onClick={() => {
                  setPoint("Show");
                }}
              />
              <TreeItem
                nodeId={rp?._id + 13}
                label={"ReCalculate"}
                onClick={() => {
                  setPoint("ReCalculate");
                }}
              />
            </TreeItem>
          </TreeItem>
          <TreeItem
            nodeId={"Show RP & Discontinuities (Selected / All)" + rp?._id}
            label={"Show RP & Discontinuities (Selected / All)"}
            onClick={() => {
              setPoint("Show RP & Discontinuities (Selected / All)");
            }}
          />
          <TreeItem
            nodeId={
              "Discontinuity intersections (optional for visualizations)" +
              rp?._id
            }
            label={"Discontinuity intersections (optional for visualizations)"}
            onClick={() => {
              setPoint(
                "Discontinuity intersections (optional for visualizations)"
              );
            }}
          >
            <TreeItem
              nodeId={"Show intersections" + rp?._id}
              label={"Show intersections"}
              onClick={() => {
                setPoint("Show intersections");
              }}
            />
            <TreeItem
              nodeId={"ReCalculate intersections" + rp?._id}
              label={"ReCalculate intersections"}
              onClick={() => {
                setPoint("ReCalculate intersections");
              }}
            />
          </TreeItem>
          <TreeItem
            nodeId={"Polyhedrons" + rp?._id}
            label={"Polyhedrons"}
            onClick={() => {
              setPoint("Polyhedrons");
            }}
          >
            <TreeItem
              nodeId={"Show polyhedrons" + rp?._id}
              label={"Show polyhedrons"}
              onClick={() => {
                setPoint("Show polyhedrons");
              }}
            />
            <TreeItem
              nodeId={"ReCalculate polyhedrons" + rp?._id}
              label={"ReCalculate polyhedrons"}
              onClick={() => {
                setPoint("ReCalculate polyhedrons");
              }}
            />
          </TreeItem>
          <TreeItem
            nodeId={"Max Quboids" + rp?._id}
            label={"Max Quboids"}
            onClick={() => {
              setPoint("Max Quboids");
            }}
          >
            <TreeItem
              nodeId={"Show Max Quboids" + rp?._id}
              label={"Show Max Quboids"}
              onClick={() => {
                setPoint("Show Max Quboids");
              }}
            />
            <TreeItem
              nodeId={"ReCalculate Max Quboids" + rp?._id}
              label={"ReCalculate Max Quboids"}
              onClick={() => {
                setPoint("ReCalculate Max Quboids");
              }}
            >
              <TreeItem
                nodeId={"Mathematical Approach" + rp?._id}
                label={"Mathematical Approach"}
                onClick={() => {
                  setPoint("Mathematical Approach");
                }}
              />
              <TreeItem
                nodeId={"Heuristic Algorithms" + rp?._id}
                label={"Heuristic Algorithms"}
                onClick={() => {
                  setPoint("Heuristic Algorithms");
                }}
              />
            </TreeItem>
          </TreeItem>
          <TreeItem
            nodeId={"Wedges" + rp?._id}
            label={"Wedges"}
            onClick={() => {
              setPoint("Wedges");
            }}
          >
            <TreeItem
              nodeId={"Show Wedges" + rp?._id}
              label={"Show Wedges"}
              onClick={() => {
                setPoint("Show Wedges");
              }}
            />
            <TreeItem
              nodeId={"ReCalculate Wedges" + rp?._id}
              label={"ReCalculate Wedges"}
              onClick={() => {
                setPoint("ReCalculate Wedges");
              }}
            />
          </TreeItem>
        </>
      ) : (
        <>
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
        </>
      )}
    </TreeItem>
  );
};

export default RPTreeItem;
