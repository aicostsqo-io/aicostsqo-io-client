import { useState } from "react";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../core-form-elements";
import { Seismic } from "@/types/models/seismic";
import { SeismicProfile } from "@/types/models/seismicProfile";
import { shapeTypes } from "@/utils/constants/gpr";
import { toast } from "react-toastify";

const initialState: SeismicProfile = {
  seismicMeasurementId: 0,
  shape: "",
  profileNumber: 0,
  endsOfSeismicProfile: 0,
  seismicProfileDirectory: "",
  explanation: "",
};

type AddProfilesProps = {
  seismic: Seismic;
  onProceed: (newSeismic: Seismic) => void;
};

export const AddProfiles = ({ seismic, onProceed }: AddProfilesProps) => {
  const [modelData, setModelData] = useState<SeismicProfile>(initialState);
  const [profiles, setProfiles] = useState<SeismicProfile[]>([]);

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
    const newSeismic = { ...seismic, profiles };
    onProceed(newSeismic);
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
            label="Seismic Measurement ID"
            value={modelData.seismicMeasurementId}
            onChange={(e: any) => handleChange("seismicMeasurementId", e)}
          />

          <FormSelectField
            label="Shape"
            value={modelData.shape}
            onChange={(e: any) => handleChange("shape", e)}
            data={[{ name: "Line" }, { name: "Mesh" }]}
          />

          <FormNumberField
            label="Profile Number"
            value={modelData.profileNumber}
            onChange={(e: any) => handleChange("profileNumber", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Ends of Seismic Profile"
            value={modelData.endsOfSeismicProfile}
            onChange={(e: any) => handleChange("endsOfSeismicProfile", e)}
          />

          <FormTextField
            label="Seismic Profile Directory"
            value={modelData.seismicProfileDirectory}
            onChange={(e: any) => handleChange("seismicProfileDirectory", e)}
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
