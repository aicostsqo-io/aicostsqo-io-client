import React, { useState } from "react";
import { FormNumberField, FormSelectField } from "../core-form-elements";
import { GprDisc } from "@/types/models/gprDisc";
import { Gpr } from "@/types/models/gpr";
import {
  crackTypes,
  profileTypes,
  referenceSystems,
  discTypes,
} from "@/utils/constants/gpr";
import { toast } from "react-toastify";

const initialState: GprDisc = {
  rectangleLineNumber: 0,
  profileType: "",
  crackProfileNumber: 0,
  typeOfCrack: "",
  typeOfDisc: "",
  dip: 0,
  dipDirection: 0,
  mapReferenceSystem: "",
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

type AddDiscsProps = {
  gpr: Gpr;
  onCompleted: (gpr: Gpr, newGpr: boolean) => void;
};

export const AddDiscs = ({ gpr, onCompleted }: AddDiscsProps) => {
  const [discData, setDiscData] = useState<GprDisc>(initialState);
  const [discs, setDiscs] = useState<GprDisc[]>([]);

  const handleChange = (field: any, event: any) => {
    setDiscData({ ...discData, [field]: event.target.value });
  };

  const handleSave = () => {
    discs.push(discData);
    setDiscs(discs);
    toast.success("Disc added!");
  };

  const handleSaveAndAddNew = () => {
    handleSave();
    setDiscData(initialState);
    toast.success("Form cleared!");
  };

  const handleProceedAndAddNewGPR = () => {
    handleSave();
    const newGpr = { ...gpr, discs };
    onCompleted(newGpr, true);
    toast.success("Redirected to add new GPR!");
  };

  const handleComplete = () => {
    handleSave();
    const newGpr = { ...gpr, discs };
    onCompleted(newGpr, false);
    toast.success("Step completed!");
  };

  const handleCancel = () => {
    setDiscData(initialState);
    toast.success("Contents cleared!");
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Rectangle Line Number"
            value={discData.rectangleLineNumber}
            onChange={(e: any) => handleChange("rectangleLineNumber", e)}
          />
          <FormSelectField
            label="Profile Type"
            value={discData.profileType}
            onChange={(e: any) => handleChange("profileType", e)}
            data={profileTypes}
          />
          <FormNumberField
            label="Crack Profile Number"
            value={discData.crackProfileNumber}
            onChange={(e: any) => handleChange("crackProfileNumber", e)}
          />
          <FormSelectField
            label="Type of Crack"
            value={discData.typeOfCrack}
            onChange={(e: any) => handleChange("typeOfCrack", e)}
            data={crackTypes}
          />
          <FormSelectField
            label="Type of Disc"
            value={discData.typeOfDisc}
            onChange={(e: any) => handleChange("typeOfDisc", e)}
            data={discTypes}
          />
          <FormNumberField
            label="Dip"
            value={discData.dip}
            onChange={(e: any) => handleChange("dip", e)}
          />
          <FormNumberField
            label="Dip Direction"
            value={discData.dipDirection}
            onChange={(e: any) => handleChange("dipDirection", e)}
          />
          <FormSelectField
            label="Map Reference System"
            value={discData.mapReferenceSystem}
            data={referenceSystems}
            onChange={(e: any) => handleChange("mapReferenceSystem", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Starting Vertex X"
            value={discData.startingVertexX}
            onChange={(e: any) => handleChange("startingVertexX", e)}
          />
          <FormNumberField
            label="Starting Vertex Y"
            value={discData.startingVertexY}
            onChange={(e: any) => handleChange("startingVertexY", e)}
          />
          <FormNumberField
            label="Starting Vertex Z"
            value={discData.startingVertexZ}
            onChange={(e: any) => handleChange("startingVertexZ", e)}
          />
          <FormNumberField
            label="End Vertex X"
            value={discData.endVertexX}
            onChange={(e: any) => handleChange("endVertexX", e)}
          />
          <FormNumberField
            label="End Vertex Y"
            value={discData.endVertexY}
            onChange={(e: any) => handleChange("endVertexY", e)}
          />
          <FormNumberField
            label="End Vertex Z"
            value={discData.endVertexZ}
            onChange={(e: any) => handleChange("endVertexZ", e)}
          />
          <FormNumberField
            label="nX"
            value={discData.nX}
            onChange={(e: any) => handleChange("nX", e)}
          />
          <FormNumberField
            label="nY"
            value={discData.nY}
            onChange={(e: any) => handleChange("nY", e)}
          />
          <FormNumberField
            label="nZ"
            value={discData.nZ}
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
