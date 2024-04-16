import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";
import RPTree from "./RPTree";
import SurveyTree from "./SurveyTree";
import { hasFeatureTag, hincalRouter } from "@/utils";

const FieldTreeItem = ({ field, router, setPoint, index, onRefresh }: any) => {
  const { setSelectedSite } = useSiteContext();
  const { expanded, setExpanded } = useTreeContext();
  const {
    siteBound: { _id },
  } = field;
  const handleClickSite = () => {
    setPoint("Site Main");
    const isExpanded = expanded.includes("Site" + field?.site?._id);
    const newExpanded = expanded.filter(
      (item: any) => !item.startsWith("Site")
    );
    if (!isExpanded) newExpanded.push("Site" + field?.site?._id);
    setExpanded(newExpanded);
    setSelectedSite(field);

    hincalRouter(router, router.query, `/project/fields/${field?.site?._id}`);
  };

  return (
    <TreeItem
      nodeId={"Site" + field?.site?._id}
      label={field?.site?.name}
      onClick={() => handleClickSite()}
    >
      <TreeItem
        nodeId={"Site Topological Map"}
        label={"Site Topological Map"}
        onClick={() => setPoint("Site Topological Map")}
      />
      <TreeItem
        nodeId={"Site Boundaries"}
        label={"Site Boundaries (3D Model Virtualization)"}
        onClick={() => setPoint("Site Boundaries")}
      />
      {hasFeatureTag(router.query, "useNewTree") ? (
        <SurveyTree
          setPoint={setPoint}
          site={field?.site}
          onRefresh={onRefresh}
        />
      ) : (
        <>
          <TreeItem
            nodeId={"GPRs"}
            label={"Discontinuities (GPR)"}
            onClick={() => {
              setPoint("Discontinuities (GPR)");
            }}
          />
          <TreeItem
            nodeId={"Magnetometrics"}
            label={"Discontinuities (Magnetometric)"}
            onClick={() => {
              setPoint("Discontinuities (Magnetometric)");
            }}
          />
          <TreeItem
            nodeId={"Resistivities"}
            label={"Discontinuities (Resistivity)"}
            onClick={() => {
              setPoint("Discontinuities (Resistivity)");
            }}
          />
          <TreeItem
            nodeId={"Seismics"}
            label={"Discontinuities (Seismic)"}
            onClick={() => {
              setPoint("Discontinuities (Seismic)");
            }}
          />
          <TreeItem
            nodeId={"Televiewers"}
            label={"Discontinuities (Televiewer)"}
            onClick={() => {
              setPoint("Discontinuities (Televiewer)");
            }}
          />
        </>
      )}

      {field?.rps?.length > 0 ? (
        <RPTree
          siteBoundId={_id}
          setPoint={setPoint}
          site={field?.site}
          rps={field?.rps}
          index={index}
          onRefresh={onRefresh}
        />
      ) : (
        <TreeItem nodeId={"No RPs"} label={"No RPs"} />
      )}
    </TreeItem>
  );
};

export default FieldTreeItem;
