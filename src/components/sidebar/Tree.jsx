import * as React from "react";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";
import { useTreeContext } from "@/contexts/Tree";
import { useSiteContext } from "@/contexts/Site";
import { toast } from "react-toastify";

const RPTreeItem = ({ rps, setPoint, index }) => {
  const { setSelectedRP, setSelectedRPs, setSelectedDiscs } = useSiteContext();
  const { expanded, setExpanded } = useTreeContext();

  const handleClickRpTreeItem = (rp) => {
    setPoint("RPItem");
    setSelectedRP(rp);
    const newExpanded = expanded.filter((item) => !item.startsWith("RPNode"));
    newExpanded.push("RPNode" + rp?._id);
    setExpanded(newExpanded);
  };

  const handleClickRpTree = (rps) => {
    setPoint("Representing Prisms");
    setSelectedRPs(rps);
  };

  return (
    <TreeItem
      nodeId={`${index + 1}`}
      label={"Representing Prisms"}
      onClick={() => handleClickRpTree(rps)}
    >
      {rps?.map((rp, index2) => (
        <TreeItem
          key={index2}
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
          {/* {
              field?.rps?.discs?.length > 0 ? <DiscTreeItem discs={field?.rps?.discs} /> : <TreeItem nodeId={"199"} label={"No Discs"} /> 
            } */}
        </TreeItem>
      ))}
    </TreeItem>
  );
};

const FieldTreeItem = ({ field, router, setPoint, index }) => {
  const { setSelectedSite } = useSiteContext();
  const { expanded, setExpanded } = useTreeContext();
  const handleClickSite = () => {
    setPoint("Site Main");
    const isExpanded = expanded.includes("Site" + field?.site?._id);
    const newExpanded = expanded.filter((item) => !item.startsWith("Site"));
    if (!isExpanded) newExpanded.push("Site" + field?.site?._id);
    setExpanded(newExpanded);
    setSelectedSite(field);
    router.push(`/project/fields/${field?.site?._id}`);
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
        label={"Site Boundaries"}
        onClick={() => setPoint("Site Boundaries")}
      />

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
        <RPTreeItem setPoint={setPoint} rps={field?.rps} index={index} />
      ) : (
        <TreeItem nodeId={"No RPs"} label={"No RPs"} />
      )}
    </TreeItem>
  );
};

export default function Tree() {
  const { expanded, setExpanded, setPoint } = useTreeContext();
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  React.useEffect(() => {
    // console.log("sidebar renderlandı"); // TODO: NEDEN HER SEFERİNDE RENDER'LIYOR
  }, []);

  const router = useRouter();

  const {
    data: fieldData,
    isLoading: fieldDataLoading,
    isError: fieldDataError,
    mutate: fieldDataMutate,
  } = useFetch("/fields");

  return (
    <Box sx={{ height: "100%", flexGrow: 1, maxWidth: 400, overflowY: "auto" }}>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        <TreeItem nodeId="Add New Field" label="Add New Field">
          <TreeItem
            nodeId="Use Wizard"
            label="Use Wizard"
            onClick={() => router.push("/project/add-field-wizard")}
          />
          <TreeItem
            nodeId="manually"
            label="Manually"
            onClick={() => router.push("/project/add-manually")}
          />
        </TreeItem>
        <TreeItem
          nodeId="Refresh Fields"
          label="Refresh Fields"
          onClick={() => {
            fieldDataMutate();
            toast.success("Fields refresh successfully");
          }}
        />
        <TreeItem nodeId="Open My Fields" label="Open My Fields">
          {fieldData?.map((field, index) => (
            <FieldTreeItem
              setPoint={setPoint}
              key={index}
              index={index}
              field={field}
              router={router}
            />
          ))}
        </TreeItem>
      </TreeView>
    </Box>
  );
}
