import React, { useState } from "react";
import { FormNumberField, FormTextField } from "../core-form-elements";
import { ResistivityContour } from "@/types/models/resistivityContour";
import { toast } from "react-toastify";
import { Resistivity } from "@/types/models/resistivity.model";

const initialState: ResistivityContour = {
  resistivityMeasurementId: 0,
  profileNumber: 0,
  x: 0,
  y: 0,
  z: 0,
  resistivity: 0,
  resistivityContourProfileDirectory: "",
  explanation: "",
};

type AddContoursProps = {
  resistivity: Resistivity;
  onCompleted: (resistivity: Resistivity, newResistivity: boolean) => void;
};

export const AddContours = ({ resistivity, onCompleted }: AddContoursProps) => {
  const [contourData, setContourData] =
    useState<ResistivityContour>(initialState);
  const [contours, setContours] = useState<ResistivityContour[]>([]);

  const handleChange = (field: any, event: any) => {
    setContourData({ ...contourData, [field]: event.target.value });
  };

  const handleSave = () => {
    contours.push(contourData);
    setContours(contours);
    toast.success("Contour added!");
  };

  const handleSaveAndAddNew = () => {
    handleSave();
    setContourData(initialState);
    toast.success("Form cleared!");
  };

  const handleProceedAndAddNewResistivity = () => {
    handleSave();
    const newResistivity = { ...resistivity, contours };
    onCompleted(newResistivity, true);
    toast.success("Redirected to add new resistivity!");
  };

  const handleComplete = () => {
    handleSave();
    const newResistivity = { ...resistivity, contours };
    onCompleted(newResistivity, false);
    toast.success("Step completed!");
  };

  const handleCancel = () => {
    setContourData(initialState);
    toast.success("Contents cleared!");
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Resistivity Measurement ID"
            value={contourData.resistivityMeasurementId}
            onChange={(e: any) => handleChange("resistivityMeasurementId", e)}
          />

          <FormNumberField
            label="Profile Number"
            value={contourData.profileNumber}
            onChange={(e: any) => handleChange("profileNumber", e)}
          />

          <FormNumberField
            label="X"
            value={contourData.x}
            onChange={(e: any) => handleChange("x", e)}
          />

          <FormNumberField
            label="Y"
            value={contourData.y}
            onChange={(e: any) => handleChange("y", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Z"
            value={contourData.z}
            onChange={(e: any) => handleChange("z", e)}
          />

          <FormNumberField
            label="Resistivity"
            value={contourData.resistivity}
            onChange={(e: any) => handleChange("resistivity", e)}
          />

          <FormTextField
            label="Resistivity Contour Profile Directory"
            value={contourData.resistivityContourProfileDirectory}
            onChange={(e: any) =>
              handleChange("resistivityContourProfileDirectory", e)
            }
          />

          <FormTextField
            label="Explanation"
            value={contourData.explanation}
            onChange={(e: any) => handleChange("explanation", e)}
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
          onClick={handleProceedAndAddNewResistivity}
        >
          Proceed & Add New Resistivity
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
