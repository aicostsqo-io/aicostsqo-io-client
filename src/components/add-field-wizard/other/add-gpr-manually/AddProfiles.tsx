import { useState } from "react";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../core-form-elements";

const initialState = {
  rectangleLineNumber: "",
  profileType: "",
  longitudinalProfileNumber: "",
  traversalProfileNumber: "",
  distance: "",
  spacing: "",
  numberOfProfile: "",
  startingVertexX: "",
  startingVertexY: "",
  startingVertexZ: "",
  endVertexX: "",
  endVertexY: "",
  endVertexZ: "",
  frequency: "",
  filename: "",
};
const profileTypes = [{ name: "Longitudinal" }, { name: "Traversal" }];

export const AddProfiles = ({ setGpr, setStep, gpr }: any) => {
  const [modelData, setModelData] = useState(initialState);
  const [profiles, setProfiles] = useState<any>([]);

  const handleChange = (field: any, event: any) => {
    setModelData({ ...modelData, [field]: event.target.value });
  };

  const handleSave = () => {
    profiles.push(modelData);
    setProfiles(profiles);
  };

  const handleSaveAndProceed = () => {
    handleSave();
    const newGpr = { ...gpr, profiles };
    setGpr(newGpr);
    setStep(2);
  };

  const handleSaveAndAddNew = () => {
    handleSave();
    setModelData(initialState);
  };

  const handleCancel = () => {
    setModelData(initialState);
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Rectangle Line Number"
            value={modelData.rectangleLineNumber}
            min={0}
            onChange={(e: any) => handleChange("rectangleLineNumber", e)}
          />
          <FormSelectField
            label="Profile Type"
            value={modelData.profileType}
            onChange={(e: any) => handleChange("profileType", e)}
            data={profileTypes}
          />
          <FormNumberField
            label="Longitudinal Profile Number"
            value={modelData.longitudinalProfileNumber}
            min={0}
            onChange={(e: any) => handleChange("longitudinalProfileNumber", e)}
          />
          <FormNumberField
            label="Traversal Profile Number"
            value={modelData.traversalProfileNumber}
            min={0}
            onChange={(e: any) => handleChange("traversalProfileNumber", e)}
          />
          <FormNumberField
            label="Distance"
            value={modelData.distance}
            min={0}
            onChange={(e: any) => handleChange("distance", e)}
          />
          <FormNumberField
            label="Spacing"
            value={modelData.spacing}
            min={0}
            onChange={(e: any) => handleChange("spacing", e)}
          />
          <FormNumberField
            label="Number of Profile"
            value={modelData.numberOfProfile}
            min={0}
            onChange={(e: any) => handleChange("numberOfProfile", e)}
          />
          <FormNumberField
            label="Starting Vertex X"
            value={modelData.startingVertexX}
            min={0}
            onChange={(e: any) => handleChange("startingVertexX", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Starting Vertex Y"
            value={modelData.startingVertexY}
            min={0}
            onChange={(e: any) => handleChange("startingVertexY", e)}
          />
          <FormNumberField
            label="Starting Vertex Z"
            value={modelData.startingVertexZ}
            min={0}
            onChange={(e: any) => handleChange("startingVertexZ", e)}
          />
          <FormNumberField
            label="End Vertex X"
            value={modelData.endVertexX}
            min={0}
            onChange={(e: any) => handleChange("endVertexX", e)}
          />
          <FormNumberField
            label="End Vertex Y"
            value={modelData.endVertexY}
            min={0}
            onChange={(e: any) => handleChange("endVertexY", e)}
          />
          <FormNumberField
            label="End Vertex Z"
            value={modelData.endVertexZ}
            min={0}
            onChange={(e: any) => handleChange("endVertexZ", e)}
          />
          <FormNumberField
            label="Frequency"
            value={modelData.frequency}
            min={0}
            onChange={(e: any) => handleChange("frequency", e)}
          />
          <FormTextField
            label="Filename"
            value={modelData.filename}
            onChange={(e: any) => handleChange("filename", e)}
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
          onClick={handleSaveAndProceed}
        >
          Save & Proceed
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
