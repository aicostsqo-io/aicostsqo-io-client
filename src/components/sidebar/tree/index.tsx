import * as React from "react";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";
import { useTreeContext } from "@/contexts/Tree";
import { toast } from "react-toastify";
import FieldTreeItem from "./components/FieldTreeItem";
import ManuallyTree from "./components/ManuallyTree";
import { hasFeatureTag, hincalRouter } from "@/utils";

export default function Tree() {
  const { expanded, setExpanded, setPoint } = useTreeContext();
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  React.useEffect(() => {
    // console.log("sidebar rendered"); // TODO: why are you rendering all the time bitch?
  }, []);

  const router = useRouter();

  const {
    data: fieldData,
    isLoading: fieldDataLoading,
    isError: fieldDataError,
    mutate: fieldDataMutate,
  } = useFetch("/fields");

  return (
    <Box
      sx={{
        height: "100%",
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
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
          {hasFeatureTag(router.query, "useNewTree") ? (
            <ManuallyTree setPoint={setPoint} />
          ) : (
            <TreeItem
              nodeId="manually"
              label="Manually"
              onClick={() =>
                hincalRouter(router, router.query, "/project/add-manually")
              }
            />
          )}
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
          {fieldData?.map((field: any, index: number) => (
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
