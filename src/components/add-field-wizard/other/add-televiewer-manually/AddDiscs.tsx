import React, { useState } from "react";
import { FormNumberField, FormTextField } from "../core-form-elements";
import { TeleviewerDisc } from "@/types/models/televiewerDisc";
import { Televiewer } from "@/types/models/televiewer";
import { toast } from "react-toastify";

const initialState: TeleviewerDisc = {
  rpId: "",
  dip: 0,
  dipDirection: 0,
  pX: 0,
  pY: 0,
  pZ: 0,
  nX: 0,
  nY: 0,
  nZ: 0,
  holeNumber: 0,
  typeOfHole: "",
  imageOrMeshOfFractureInterpolation: "",
  explanation: "",
  zAdjust: 0,
};

type AddDiscsProps = {
  televiewer: Televiewer;
  onCompleted: (televiewer: Televiewer, newTeleviewer: boolean) => void;
};

export const AddDiscs = ({ televiewer, onCompleted }: AddDiscsProps) => {
  const [discData, setDiscData] = useState<TeleviewerDisc>(initialState);
  const [discs, setDiscs] = useState<TeleviewerDisc[]>([]);

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

  const handleProceedAndAddNewTeleviewer = () => {
    handleSave();
    const newTeleviewer = { ...televiewer, discs };
    onCompleted(newTeleviewer, true);
    toast.success("Redirected to add new televiewer!");
  };

  const handleComplete = () => {
    handleSave();
    const newTeleviewer = { ...televiewer, discs };
    onCompleted(newTeleviewer, false);
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
          {/* <FormTextField
            label="RP ID"
            value={discData.rpId}
            onChange={(e: any) => handleChange("rpId", e)}
          /> */}

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

          <FormNumberField
            label="P X"
            value={discData.pX}
            onChange={(e: any) => handleChange("pX", e)}
          />

          <FormNumberField
            label="P Y"
            value={discData.pY}
            onChange={(e: any) => handleChange("pY", e)}
          />

          <FormNumberField
            label="P Z"
            value={discData.pZ}
            onChange={(e: any) => handleChange("pZ", e)}
          />

          <FormNumberField
            label="N X"
            value={discData.nX}
            onChange={(e: any) => handleChange("nX", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="N Y"
            value={discData.nY}
            onChange={(e: any) => handleChange("nY", e)}
          />

          <FormNumberField
            label="N Z"
            value={discData.nZ}
            onChange={(e: any) => handleChange("nZ", e)}
          />

          <FormNumberField
            label="Hole Number"
            value={discData.holeNumber}
            onChange={(e: any) => handleChange("holeNumber", e)}
          />

          <FormTextField
            label="Type of Hole"
            value={discData.typeOfHole}
            onChange={(e: any) => handleChange("typeOfHole", e)}
          />

          <FormTextField
            label="Image or Mesh of Fracture Interpolation"
            value={discData.imageOrMeshOfFractureInterpolation}
            onChange={(e: any) =>
              handleChange("imageOrMeshOfFractureInterpolation", e)
            }
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
          onClick={handleProceedAndAddNewTeleviewer}
        >
          Proceed & Add New Televiewer
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
