import RPItemMenu from "@/components/common/Menu/RPItemMenu";
import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { hasFeatureTag } from "@/utils";
import { TreeItem } from "@mui/lab";
import { useRouter } from "next/router";
import { useState } from "react";

const initialContextMenu = {
  show: false,
  x: 0,
  y: 0,
};
const RPTreeItem = ({ rp, site, setPoint, onRefresh }: any) => {
  const router = useRouter();
  const { setSelectedRP, setSelectedDiscs } = useSiteContext();
  const { expanded, setExpanded } = useTreeContext();
  const { calculatePolyhedrons, generateVirtual1DExtendedRPs } = site;

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
    <>
      <TreeItem
        nodeId={"RPNode" + rp?._id}
        label={rp?.name === "RP 0" ? rp.name + " (Root / Genesis)" : rp?.name}
        onClick={() => handleClickRpTreeItem(rp)}
        onContextMenu={handleContextMenu}
      >
        {!hasFeatureTag(router.query, "useOldTree") ? (
          <>
            <TreeItem
              nodeId={rp?._id + 1}
              label={"RP"}
              onClick={() => {
                setPoint("RP");
                setSelectedDiscs([]);
              }}
              onContextMenu={(e) => e.stopPropagation()}
            />
            <TreeItem
              nodeId={rp?._id + 2}
              label={"Discontinuities (All)"}
              onClick={() => {
                setPoint("Discontinuities (All)");
                // setSelectedDiscs([]);
              }}
              onContextMenu={(e) => e.stopPropagation()}
            >
              <TreeItem
                nodeId={rp?._id + 3}
                label={"Scanline"}
                onClick={() => {
                  setPoint("Scanline");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 4}
                label={"Joint Sets"}
                onClick={() => {
                  setPoint("Joint Sets");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 5}
                label={"Drilling (All)"}
                onClick={() => {
                  setPoint("Discontinuities (Drilling)");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              >
                <TreeItem
                  nodeId={rp?._id + 6}
                  label={"Televiewer"}
                  onClick={() => {
                    setPoint("Televiewer");
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                />
                <TreeItem
                  nodeId={rp?._id + 7}
                  label={"Core drilling"}
                  onClick={() => {
                    setPoint("Core drilling");
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                />
                <TreeItem
                  nodeId={rp?._id + 8}
                  label={"Borehole"}
                  onClick={() => {
                    setPoint("Borehole");
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                />
              </TreeItem>
              <TreeItem
                nodeId={rp?._id + 9}
                label={"Lidar"}
                onClick={() => {
                  setPoint("Lidar");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 10}
                label={"Ground Penetrating Radar (GPR)"}
                onClick={() => {
                  setPoint("Ground Penetrating Radar (GPR)");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 11}
                label={"Magnetometric"}
                onClick={() => {
                  setPoint("Magnetometric");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 12}
                label={"Resistivity"}
                onClick={() => {
                  setPoint("Resistivity");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 13}
                label={"Seismic"}
                onClick={() => {
                  setPoint("Seismic");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 14}
                label={"1D Extended (Virtual Representative Prisms)"}
                onClick={() => {
                  setPoint("1D Extended (Virtual Representative Prisms)");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 15}
                label={"3D Extended (Virtual Representative Prisms)"}
                onClick={() => {
                  setPoint("3D Extended (Virtual Representative Prisms)");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={rp?._id + 16}
                label={"DFN"}
                onClick={() => {
                  setPoint("DFN");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              >
                <TreeItem
                  nodeId={rp?._id + 17}
                  label={"Show DFN"}
                  onClick={() => {
                    setPoint("Show DFN");
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                />
                <TreeItem
                  nodeId={rp?._id + 18}
                  label={"ReCalculate DFN"}
                  onClick={() => {
                    setPoint("ReCalculate DFN");
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                />
              </TreeItem>
            </TreeItem>
            <TreeItem
              nodeId={"Show RP & Discontinuities (Selected / All)" + rp?._id}
              label={"Show RP & Discontinuities (Selected / All)"}
              onClick={() => {
                setPoint("Show RP & Discontinuities (Selected / All)");
              }}
              onContextMenu={(e) => e.stopPropagation()}
            />
            <TreeItem
              nodeId={
                "Discontinuity intersections (optional for visualizations)" +
                rp?._id
              }
              label={
                "Discontinuity intersections (optional for visualizations)"
              }
              onClick={() => {
                setPoint(
                  "Discontinuity intersections (optional for visualizations)"
                );
              }}
              onContextMenu={(e) => e.stopPropagation()}
            >
              <TreeItem
                nodeId={"Show intersections" + rp?._id}
                label={"Show intersections"}
                onClick={() => {
                  setPoint("Show intersections");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={"ReCalculate intersections" + rp?._id}
                label={"ReCalculate intersections"}
                onClick={() => {
                  setPoint("ReCalculate intersections");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
            </TreeItem>
            <TreeItem
              nodeId={"Polyhedrons" + rp?._id}
              label={"Polyhedrons"}
              onClick={() => {
                setPoint("Polyhedrons");
              }}
              onContextMenu={(e) => e.stopPropagation()}
            >
              <TreeItem
                nodeId={"Show polyhedrons" + rp?._id}
                label={"Show polyhedrons"}
                onClick={() => {
                  setPoint("Show polyhedrons");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={"ReCalculate polyhedrons" + rp?._id}
                label={"ReCalculate polyhedrons"}
                onClick={() => {
                  setPoint("ReCalculate polyhedrons");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
            </TreeItem>
            <TreeItem
              nodeId={"Max Quboids" + rp?._id}
              label={"Max Quboids"}
              onClick={() => {
                setPoint("Max Quboids");
              }}
              onContextMenu={(e) => e.stopPropagation()}
            >
              <TreeItem
                nodeId={"Show Max Quboids" + rp?._id}
                label={"Show Max Quboids"}
                onClick={() => {
                  setPoint("Show Max Quboids");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={"ReCalculate Max Quboids" + rp?._id}
                label={"ReCalculate Max Quboids"}
                onClick={() => {
                  setPoint("ReCalculate Max Quboids");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              >
                <TreeItem
                  nodeId={"Mathematical Approach" + rp?._id}
                  label={"Mathematical Approach"}
                  onClick={() => {
                    setPoint("Mathematical Approach");
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                />
                <TreeItem
                  nodeId={"Heuristic Algorithms" + rp?._id}
                  label={"Heuristic Algorithms"}
                  onClick={() => {
                    setPoint("Heuristic Algorithms");
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                />
              </TreeItem>
            </TreeItem>
            <TreeItem
              nodeId={"Wedges" + rp?._id}
              label={"Wedges"}
              onClick={() => {
                setPoint("Wedges");
              }}
              onContextMenu={(e) => e.stopPropagation()}
            >
              <TreeItem
                nodeId={"Show Wedges" + rp?._id}
                label={"Show Wedges"}
                onClick={() => {
                  setPoint("Show Wedges");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
              <TreeItem
                nodeId={"ReCalculate Wedges" + rp?._id}
                label={"ReCalculate Wedges"}
                onClick={() => {
                  setPoint("ReCalculate Wedges");
                }}
                onContextMenu={(e) => e.stopPropagation()}
              />
            </TreeItem>
          </>
        ) : (
          // TODO: remove this when new tree is fully implemented
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
      {contextMenu.show ? (
        <RPItemMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={closeContextMenu}
          rpId={rp?._id}
          onRefresh={onRefresh}
        />
      ) : null}
    </>
  );
};

export default RPTreeItem;
