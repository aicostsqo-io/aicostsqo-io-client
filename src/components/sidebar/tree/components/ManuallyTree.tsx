import { hincalRouter } from "@/utils";
import { TreeItem } from "@mui/lab";
import { useRouter } from "next/router";
import React from "react";

const ManuallyTree = ({ setPoint }: any) => {
  const router = useRouter();
  return (
    <TreeItem
      nodeId="manually"
      label="Manually"
      onClick={() =>
        hincalRouter(router, router.query, "/project/add-manually")
      }
    >
      <TreeItem
        nodeId={"Import Site"}
        label={"Import Site"}
        onClick={() => {
          setPoint("Import Site");
        }}
      />
      <TreeItem
        nodeId={"Import Field Survey Data"}
        label={"Import Field Survey Data"}
        onClick={() => {
          setPoint("Import Field Survey Data");
        }}
      >
        <TreeItem
          nodeId={"Import Scanline"}
          label={"Import Scanline"}
          onClick={() => {
            setPoint("Import Scanline");
          }}
        />
        <TreeItem
          nodeId={"Import Joint Sets"}
          label={"Import Joint Sets"}
          onClick={() => {
            setPoint("Import Joint Sets");
          }}
        />
        <TreeItem
          nodeId={"Import Drilling"}
          label={"Import Drilling"}
          onClick={() => {
            setPoint("Import Drilling");
          }}
        />
        <TreeItem
          nodeId={"Import Lidar"}
          label={"Import Lidar"}
          onClick={() => {
            setPoint("Import Lidar");
          }}
        />
        <TreeItem
          nodeId={"Import Ground Penetrating Radar (GPR)"}
          label={"Import Ground Penetrating Radar (GPR)"}
          onClick={() => {
            setPoint("Import Ground Penetrating Radar (GPR)");
          }}
        />
        <TreeItem
          nodeId={"Import Magnetometry"}
          label={"Import Magnetometry"}
          onClick={() => {
            setPoint("Import Magnetometry");
          }}
        />
        <TreeItem
          nodeId={"Import Resistivity"}
          label={"Import Resistivity"}
          onClick={() => {
            setPoint("Import Resistivity");
          }}
        />
      </TreeItem>
      <TreeItem
        nodeId={"Import Seismic"}
        label={"Import Seismic"}
        onClick={() => {
          setPoint("Import Seismic");
        }}
      />
      <TreeItem
        nodeId={"Import RP (Representing Prisms)"}
        label={"Import RP (Representing Prisms)"}
        onClick={() => {
          setPoint("Import RP (Representing Prisms)");
        }}
      />
      <TreeItem
        nodeId={"Import Discontinuities"}
        label={"Import Discontinuities"}
        onClick={() => {
          setPoint("Import Discontinuities");
        }}
      />
      <TreeItem
        nodeId={"Import Polyhedrons"}
        label={"Import Polyhedrons"}
        onClick={() => {
          setPoint("Import Polyhedrons");
        }}
      />
      <TreeItem
        nodeId={"Import Max Quboids"}
        label={"Import Max Quboids"}
        onClick={() => {
          setPoint("Import Max Quboids");
        }}
      />
    </TreeItem>
  );
};

export default ManuallyTree;
