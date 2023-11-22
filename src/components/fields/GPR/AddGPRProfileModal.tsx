import { createGPR, createGPRProfile } from "@/api/gpr";
import { useSiteContext } from "@/contexts/Site";
import React, { use, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { Gpr } from "@/types/models/gpr";
import {
  dimensions,
  referenceSystems,
  shapeTypes,
} from "@/utils/constants/gpr";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "@/components/add-field-wizard/other/core-form-elements";
import { GprProfile } from "@/types/models/gprProfile";
import { profileTypes } from "@/utils/constants/gpr";

interface Props {
  rectangleLineNumber: number;
  onClose: () => void;
  refetch: () => void;
}

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
const AddGPRProfileModal = ({
  rectangleLineNumber,
  onClose,
  refetch,
}: Props) => {
  const [gprProfile, setGprProfile] = useState<any>(initialState);
  const { selectedSite } = useSiteContext();

  useEffect(() => {
    setGprProfile({ ...gprProfile, rectangleLineNumber });
  }, []);

  const handleAddGPRProfile = async () => {
    //TODO: validation
    for (let value of Object.values(gprProfile)) {
      if (!value) {
        toast.error("Please fill all fields");
        return;
      }
    }

    try {
      await createGPRProfile({
        ...gprProfile,
        siteId: selectedSite?.site?._id,
      });

      refetch();
      toast.success("GPR added successfully");
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (field: any, event: any) => {
    setGprProfile({ ...gprProfile, [field]: event.target.value });
  };

  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 w-full flex justify-center items-center overflow-scroll z-[100] tracking-wider">
      <div className="bg-white text-black radius-lg w-2/3 flex flex-col h-[800px] max-h-screen">
        <div className="modal-header py-3 px-7 flex justify-between border-b border-slate-600 border-opacity-50">
          <span className="modal-header-title font-bold">Add GPR</span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <div className="modal-body px-7 py-5 flex flex-col gap-2  overflow-auto flex-1">
          <FormNumberField
            label="Rectangle Line Number"
            value={gprProfile.rectangleLineNumber}
            min={0}
            onChange={(e: any) => handleChange("rectangleLineNumber", e)}
          />
          <FormSelectField
            label="Profile Type"
            value={gprProfile.profileType}
            onChange={(e: any) => handleChange("profileType", e)}
            data={profileTypes}
          />
          <FormNumberField
            label="Longitudinal Profile Number"
            value={gprProfile.longitudinalProfileNumber}
            min={0}
            onChange={(e: any) => handleChange("longitudinalProfileNumber", e)}
          />
          <FormNumberField
            label="Traversal Profile Number"
            value={gprProfile.traversalProfileNumber}
            min={0}
            onChange={(e: any) => handleChange("traversalProfileNumber", e)}
          />
          <FormNumberField
            label="Distance"
            value={gprProfile.distance}
            min={0}
            onChange={(e: any) => handleChange("distance", e)}
          />
          <FormNumberField
            label="Spacing"
            value={gprProfile.spacing}
            min={0}
            onChange={(e: any) => handleChange("spacing", e)}
          />
          <FormNumberField
            label="Number of Profile"
            value={gprProfile.numberOfProfile}
            min={0}
            onChange={(e: any) => handleChange("numberOfProfile", e)}
          />
          <FormNumberField
            label="Starting Vertex X"
            value={gprProfile.startingVertexX}
            min={0}
            onChange={(e: any) => handleChange("startingVertexX", e)}
          />
          <FormNumberField
            label="Starting Vertex Y"
            value={gprProfile.startingVertexY}
            min={0}
            onChange={(e: any) => handleChange("startingVertexY", e)}
          />
          <FormNumberField
            label="Starting Vertex Z"
            value={gprProfile.startingVertexZ}
            min={0}
            onChange={(e: any) => handleChange("startingVertexZ", e)}
          />
          <FormNumberField
            label="End Vertex X"
            value={gprProfile.endVertexX}
            min={0}
            onChange={(e: any) => handleChange("endVertexX", e)}
          />
          <FormNumberField
            label="End Vertex Y"
            value={gprProfile.endVertexY}
            min={0}
            onChange={(e: any) => handleChange("endVertexY", e)}
          />
          <FormNumberField
            label="End Vertex Z"
            value={gprProfile.endVertexZ}
            min={0}
            onChange={(e: any) => handleChange("endVertexZ", e)}
          />
          <FormNumberField
            label="Frequency"
            value={gprProfile.frequency}
            min={0}
            onChange={(e: any) => handleChange("frequency", e)}
          />
          <FormTextField
            label="Filname"
            value={gprProfile.filname}
            onChange={(e: any) => handleChange("filname", e)}
          />

          <div className="flex flex-col gap-4 mt-auto">
            <div
              className="bg-black text-white justify-between w-full mt-3 py-2 rounded text-center cursor-pointer"
              onClick={handleAddGPRProfile}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGPRProfileModal;
