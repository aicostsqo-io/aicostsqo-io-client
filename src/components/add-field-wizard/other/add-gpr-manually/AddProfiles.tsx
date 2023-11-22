import { useState } from "react";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../core-form-elements";
import { Gpr } from "@/types/models/gpr";
import { GprProfile } from "@/types/models/gprProfile";
import { profileTypes } from "@/utils/constants/gpr";
import { toast } from "react-toastify";

const initialState: GprProfile = {
  rectangleLineNumber: 0,
  profileType: "",
  longitudinalProfileNumber: 0,
  traversalProfileNumber: 0,
  distance: 0,
  spacing: 0,
  numberOfProfile: 0,
  startingVertexX: 0,
  startingVertexY: 0,
  startingVertexZ: 0,
  endVertexX: 0,
  endVertexY: 0,
  endVertexZ: 0,
  frequency: 0,
  filname: "",
};

type AddProfilesProps = {
  gpr: Gpr;
  onProceed: (newGpr: Gpr) => void;
};

export const AddProfiles = ({ gpr, onProceed }: AddProfilesProps) => {
  const [modelData, setModelData] = useState<GprProfile>(initialState);
  const [profiles, setProfiles] = useState<GprProfile[]>([]);

  const handleChange = (field: any, event: any) => {
    setModelData({ ...modelData, [field]: event.target.value });
  };

  const handleSave = () => {
    profiles.push(modelData);
    setProfiles(profiles);
    toast.success("Profile added!");
  };

  const handleSaveAndProceed = () => {
    handleSave();
    const newGpr = { ...gpr, profiles };
    onProceed(newGpr);
    toast.success("Proceeding to next step!");
  };

  const handleSaveAndAddNew = () => {
    handleSave();
    setModelData(initialState);
    toast.success("Form cleared!");
  };

  const handleCancel = () => {
    setModelData(initialState);
    toast.success("Contents cleared!");
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Rectangle Line Number"
            value={modelData.rectangleLineNumber}
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
            onChange={(e: any) => handleChange("longitudinalProfileNumber", e)}
          />
          <FormNumberField
            label="Traversal Profile Number"
            value={modelData.traversalProfileNumber}
            onChange={(e: any) => handleChange("traversalProfileNumber", e)}
          />
          <FormNumberField
            label="Distance"
            value={modelData.distance}
            onChange={(e: any) => handleChange("distance", e)}
          />
          <FormNumberField
            label="Spacing"
            value={modelData.spacing}
            onChange={(e: any) => handleChange("spacing", e)}
          />
          <FormNumberField
            label="Number of Profile"
            value={modelData.numberOfProfile}
            onChange={(e: any) => handleChange("numberOfProfile", e)}
          />
          <FormNumberField
            label="Starting Vertex X"
            value={modelData.startingVertexX}
            onChange={(e: any) => handleChange("startingVertexX", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Starting Vertex Y"
            value={modelData.startingVertexY}
            onChange={(e: any) => handleChange("startingVertexY", e)}
          />
          <FormNumberField
            label="Starting Vertex Z"
            value={modelData.startingVertexZ}
            onChange={(e: any) => handleChange("startingVertexZ", e)}
          />
          <FormNumberField
            label="End Vertex X"
            value={modelData.endVertexX}
            onChange={(e: any) => handleChange("endVertexX", e)}
          />
          <FormNumberField
            label="End Vertex Y"
            value={modelData.endVertexY}
            onChange={(e: any) => handleChange("endVertexY", e)}
          />
          <FormNumberField
            label="End Vertex Z"
            value={modelData.endVertexZ}
            onChange={(e: any) => handleChange("endVertexZ", e)}
          />
          <FormNumberField
            label="Frequency"
            value={modelData.frequency}
            onChange={(e: any) => handleChange("frequency", e)}
          />
          <FormTextField
            label="Filname"
            value={modelData.filname}
            onChange={(e: any) => handleChange("filname", e)}
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
