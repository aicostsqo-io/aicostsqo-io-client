import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { useRouter } from "next/router";
import { getSites } from "@/api/site";
import useFetch from "@/hooks/useFetch";
import { useTreeContext } from "@/contexts/Tree";

//* disc rp'lerin içinde olmalı
// const DiscTreeItem = ({disc} : any) => {}

const RPTreeItem = ({ rps }: any) => {
  return (
    <TreeItem nodeId={"15"} label={"Representing Prisms"}>
      {rps?.map((rp: any, index: number) => (
        <TreeItem key={index} nodeId={rp?._id} label={`RP 00${index + 1}`}>
          <TreeItem nodeId={"11"} label={"RP"} />
          <TreeItem
            nodeId={"12"}
            label={"Discontinuities (Scanline Measure)"}
          />
          {/* {
              field?.rps?.discs?.length > 0 ? <DiscTreeItem discs={field?.rps?.discs} /> : <TreeItem nodeId={"199"} label={"No Discs"} /> 
            } */}
        </TreeItem>
      ))}
    </TreeItem>
  );
};

const FieldTreeItem = ({ field, router }: any) => {
  return (
    <TreeItem
      nodeId={field?.site?._id}
      label={field?.site?.name}
      // onClick={() => router.push(`/project/fields/${field?.site?._id}`)}
    >
      <TreeItem nodeId={"10"} label={"Site Topological Map"} />
      <TreeItem nodeId={"10"} label={"Site Boundaries"} />
      {field?.rps?.length > 0 ? (
        <RPTreeItem rps={field?.rps} />
      ) : (
        <TreeItem nodeId={"99"} label={"No RPs"} />
      )}
    </TreeItem>
  );
};

export default function Tree() {
  const { expanded, setExpanded } = useTreeContext();
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded: any) =>
      oldExpanded.length === 0 ? ["1", "5", "6", "7"] : []
    );
  };

  React.useEffect(() => {
    console.log("sidebar renderlandı"); //? NEDEN HER SEFERİNDE RENDER'LIYOR
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
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? "Expand all" : "Collapse all"}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        <TreeItem nodeId="1" label="Add New Field">
          <TreeItem
            nodeId="2"
            label="Use Wizard"
            onClick={() => router.push("/project/add-field-wizard")}
          />
          <TreeItem nodeId="3" label="Manually" />
        </TreeItem>
        <TreeItem
          nodeId="5"
          label="Open My Fields"
          onClick={() => router.push("/project/fields")}
        >
          {fieldData?.map((field: any, index: number) => (
            <FieldTreeItem key={index} field={field} router={router} />
          ))}
        </TreeItem>
      </TreeView>
    </Box>
  );
}
