import React, { useState } from "react";
import { FormNumberField, FormSelectField } from "../core-form-elements";
import { GprDisc } from "@/types/models/gprDisc";
import { Gpr } from "@/types/models/gpr";

const initialState: GprDisc = {
  rectangleLineNumber: 0,
  profileType: "",
  crackProfileNumber: 0,
  typeOfCrack: "",
  typeOfDisc: "",
  dip: 0,
  dipDirection: 0,
  mapReferenceSystem: 0,
  startingVertexX: 0,
  startingVertexY: 0,
  startingVertexZ: 0,
  endVertexX: 0,
  endVertexY: 0,
  endVertexZ: 0,
  nX: 0,
  nY: 0,
  nZ: 0,
};

const profileTypes = [
  {
    name: "Longitudinal",
  },
  { name: "Traversal" },
];

const crackTypes = [
  {
    name: "Main Crack",
  },
  { name: "Crack Zone" },
];

const discTypes = [
  {
    name: "Circular",
  },
  {
    name: "Quadratic",
  },
  {
    name: "Triangular",
  },
  {
    name: "Other",
  },
  {
    name: "Line",
  },
];

type AddCracksProps = {
  gpr: Gpr;
  onCompleted: (gpr: Gpr, newGpr: boolean) => void;
};

export const AddCracks = ({ gpr, onCompleted }: AddCracksProps) => {
  const [crackData, setCrackData] = useState<GprDisc>(initialState);
  const [discs, setDiscs] = useState<GprDisc[]>([]);

  const handleChange = (field: any, event: any) => {
    setCrackData({ ...crackData, [field]: event.target.value });
  };

  const handleSave = () => {
    discs.push(crackData);
    setDiscs(discs);
  };

  const handleSaveAndAddNew = () => {
    handleSave();
    setCrackData(initialState);
  };

  const handleProceedAndAddNewGPR = () => {
    handleSave();
    const newGpr = { ...gpr, discs };
    onCompleted(newGpr, true);
  };

  const handleComplete = () => {
    handleSave();
    const newGpr = { ...gpr, discs };
    onCompleted(newGpr, false);
  };

  const handleCancel = () => {
    setCrackData(initialState);
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Rectangle Line Number"
            value={crackData.rectangleLineNumber}
            min={0}
            onChange={(e: any) => handleChange("rectangleLineNumber", e)}
          />
          <FormSelectField
            label="Profile Type"
            value={crackData.profileType}
            onChange={(e: any) => handleChange("profileType", e)}
            data={profileTypes}
          />
          <FormNumberField
            label="Crack Profile Number"
            value={crackData.crackProfileNumber}
            min={0}
            onChange={(e: any) => handleChange("crackProfileNumber", e)}
          />
          <FormSelectField
            label="Type of Crack"
            value={crackData.typeOfCrack}
            onChange={(e: any) => handleChange("typeOfCrack", e)}
            data={crackTypes}
          />
          <FormSelectField
            label="Type of Disc"
            value={crackData.typeOfDisc}
            onChange={(e: any) => handleChange("typeOfDisc", e)}
            data={discTypes}
          />
          <FormNumberField
            label="Dip"
            value={crackData.dip}
            min={0}
            onChange={(e: any) => handleChange("dip", e)}
          />
          <FormNumberField
            label="Dip Direction"
            value={crackData.dipDirection}
            min={0}
            onChange={(e: any) => handleChange("dipDirection", e)}
          />
          <FormNumberField
            label="Map Reference System"
            value={crackData.mapReferenceSystem}
            min={0}
            onChange={(e: any) => handleChange("mapReferenceSystem", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Starting Vertex X"
            value={crackData.startingVertexX}
            min={0}
            onChange={(e: any) => handleChange("startingVertexX", e)}
          />
          <FormNumberField
            label="Starting Vertex Y"
            value={crackData.startingVertexY}
            min={0}
            onChange={(e: any) => handleChange("startingVertexY", e)}
          />
          <FormNumberField
            label="Starting Vertex Z"
            value={crackData.startingVertexZ}
            min={0}
            onChange={(e: any) => handleChange("startingVertexZ", e)}
          />
          <FormNumberField
            label="End Vertex X"
            value={crackData.endVertexX}
            min={0}
            onChange={(e: any) => handleChange("endVertexX", e)}
          />
          <FormNumberField
            label="End Vertex Y"
            value={crackData.endVertexY}
            min={0}
            onChange={(e: any) => handleChange("endVertexY", e)}
          />
          <FormNumberField
            label="End Vertex Z"
            value={crackData.endVertexZ}
            min={0}
            onChange={(e: any) => handleChange("endVertexZ", e)}
          />
          <FormNumberField
            label="nX"
            value={crackData.nX}
            min={0}
            onChange={(e: any) => handleChange("nX", e)}
          />
          <FormNumberField
            label="nY"
            value={crackData.nY}
            min={0}
            onChange={(e: any) => handleChange("nY", e)}
          />
          <FormNumberField
            label="nZ"
            value={crackData.nZ}
            min={0}
            onChange={(e: any) => handleChange("nZ", e)}
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 pt-4">
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleSave}
        >
          Save
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleSaveAndAddNew}
        >
          Save & Add New
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleProceedAndAddNewGPR}
        >
          Proceed & Add New GPR
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleComplete}
        >
          Complete
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleCancel}
        >
          Cancel
        </div>
      </div>
    </>
  );
};
