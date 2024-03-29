import { useState } from "react";
import {
  FormImageField,
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../../../add-field-wizard/other/core-form-elements";
import { Gpr } from "@/types/models/gpr";
import { GprProfile } from "@/types/models/gprProfile";
import { profileTypes } from "@/utils/constants/gpr";
import { toast } from "react-toastify";
import { uploadFile } from "@/api/upload";
import GPRExcel from "./GPRExcel";

const UPLOADS_ENDPOINT = process.env.NEXT_PUBLIC_UPLOADS_ENDPOINT;

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
  // gpr: Gpr;
  method: string;
  // onProceed: (newGpr: Gpr) => void;
};

export const AddProfiles = ({ method }: AddProfilesProps) => {
  const [modelData, setModelData] = useState<any>(initialState);
  const [profiles, setProfiles] = useState<GprProfile[]>([]);

  const handleChange = (field: any, event: any) => {
    setModelData({ ...modelData, [field]: event.target.value });
  };

  const handleSave = () => {
    // check if profile fields are empty
    const profileFields = Object.keys(modelData);
    for (const field of profileFields) {
      if (modelData[field] === "") {
        toast.error("Please fill all the fields");
        return false;
      }
    }

    profiles.push(modelData);
    setProfiles(profiles);
    toast.success("Profile added!");

    return true;
  };

  const handleSaveAndProceed = () => {
    const status = handleSave();
    if (!status) return;
    // const newGpr = { ...gpr, profiles };
    // onProceed(newGpr);
    toast.success("Proceeding to next step!");
  };

  const handleSaveAndAddNew = () => {
    const status = handleSave();
    if (!status) return;
    setModelData(initialState);
    toast.success("Form cleared!");
  };

  const handleClear = () => {
    setModelData(initialState);
    toast.success("Contents cleared!");
  };

  const handleNext = () => {
    // onProceed(gpr);
    toast.success("Proceeding to next step!");
  };

  const handleUploadImage = async (event: any) => {
    const file = event.target.files[0];
    const folder = "gprProfiles";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    try {
      const { data } = await uploadFile(formData);
      setModelData({ ...modelData, filname: data.filePath });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-row gap-20 modal-container p-10">
        <div className="modal-container-title">
          GPR Profiles - Add {method === "manual" ? "Manually" : "from Excel"}
        </div>
        {method === "manual" ? (
          <>
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
                onChange={(e: any) =>
                  handleChange("longitudinalProfileNumber", e)
                }
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
              {modelData.filname ? (
                <div className={"flex items-center"}>
                  <label className={"w-1/2 me-2"}>{"Filname"}</label>
                  <div className="w-[300px] h-[200px]">
                    <img
                      src={`${UPLOADS_ENDPOINT}/${modelData.filname}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <FormImageField
                  label="Filname"
                  onChange={(e: any) => handleUploadImage(e)}
                />
              )}
            </div>
          </>
        ) : (
          <GPRExcel />
        )}
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
          onClick={handleClear}
        >
          Clear
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </>
  );
};
