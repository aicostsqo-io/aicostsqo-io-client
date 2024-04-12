import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { TreeItem } from "@mui/lab";
import RPTree from "./RPTree";
import SurveyTree from "./SurveyTree";
import { hasExactKey } from "@/utils";

const FieldTreeItem = ({ field, router, setPoint, index }: any) => {
  const { setSelectedSite } = useSiteContext();
  const { expanded, setExpanded } = useTreeContext();
  const handleClickSite = () => {
    setPoint("Site Main");
    const isExpanded = expanded.includes("Site" + field?.site?._id);
    const newExpanded = expanded.filter(
      (item: any) => !item.startsWith("Site")
    );
    if (!isExpanded) newExpanded.push("Site" + field?.site?._id);
    setExpanded(newExpanded);
    setSelectedSite(field);

    const currentQueryParams = router.query;
    const filteredQueryParams = Object.keys(currentQueryParams).reduce(
      (acc: any, key: any) => {
        if (key !== "_id") {
          acc[key] = currentQueryParams[key];
        }
        return acc;
      },
      {}
    );
    const queryString = new URLSearchParams(filteredQueryParams).toString();

    if (queryString) {
      router.push(`/project/fields/${field?.site?._id}?${queryString}`);
    } else {
      router.push(`/project/fields/${field?.site?._id}`);
    }
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
      {hasExactKey(router.query, "useNewTree") ? (
        <SurveyTree setPoint={setPoint} site={field?.site} />
      ) : null}
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
      {field?.rps?.length > 0 ? (
        <RPTree
          setPoint={setPoint}
          site={field?.site}
          rps={field?.rps}
          index={index}
        />
      ) : (
        <TreeItem nodeId={"No RPs"} label={"No RPs"} />
      )}
    </TreeItem>
  );
};

export default FieldTreeItem;
