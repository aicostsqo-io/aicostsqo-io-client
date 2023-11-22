import React, { useState } from "react";
import { FormNumberField, FormTextField } from "../core-form-elements";
import { toast } from "react-toastify";
import { Resistivity } from "@/types/models/resistivity.model";
type SetResistivityDataProps = {
  onProceed: (resistivity: any) => void;
};

const initialState: Resistivity = {
  resistivityMeasurementId: 0,
  profileNumber: 0,
  latitudeMin: 0,
  longitudeMin: 0,
  altitudeMin: 0,
  latitudeMax: 0,
  longitudeMax: 0,
  altitudeMax: 0,
  depth: 0,
  distance: 0,
  resistivity: 0,
  resistivityProfileDirectory: "",
  explanation: "",
  contours: [],
};

function SetResistivityData({ onProceed }: SetResistivityDataProps) {
  const [resistivity, setResistivity] = useState<Resistivity>(initialState);

  const handleChange = (field: any, event: any) => {
    const updatedResistivity = { ...resistivity };
    const fieldPath = field.split(".");
    let currentLevel: any = updatedResistivity;
    for (let i = 0; i < fieldPath.length - 1; i++) {
      currentLevel = currentLevel[fieldPath[i]];
    }
    currentLevel[fieldPath[fieldPath.length - 1]] = event.target.value;
    setResistivity(updatedResistivity);
  };

  const handleSaveAndProceed = () => {
    toast.success("Proceeding to add discs");
    onProceed(resistivity);
  };

  const handleCancel = () => {
    setResistivity(initialState);
    toast.success("Contents cleared!");
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Resistivity Measurement ID"
            value={resistivity.resistivityMeasurementId}
            onChange={(e: any) => handleChange("resistivityMeasurementId", e)}
          />

          <FormNumberField
            label="Profile Number"
            value={resistivity.profileNumber}
            onChange={(e: any) => handleChange("profileNumber", e)}
          />

          <FormNumberField
            label="Latitude Min"
            value={resistivity.latitudeMin}
            onChange={(e: any) => handleChange("latitudeMin", e)}
          />

          <FormNumberField
            label="Longitude Min"
            value={resistivity.longitudeMin}
            onChange={(e: any) => handleChange("longitudeMin", e)}
          />

          <FormNumberField
            label="Altitude Min"
            value={resistivity.altitudeMin}
            onChange={(e: any) => handleChange("altitudeMin", e)}
          />

          <FormNumberField
            label="Latitude Max"
            value={resistivity.latitudeMax}
            onChange={(e: any) => handleChange("latitudeMax", e)}
          />

          <FormNumberField
            label="Longitude Max"
            value={resistivity.longitudeMax}
            onChange={(e: any) => handleChange("longitudeMax", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Altitude Max"
            value={resistivity.altitudeMax}
            onChange={(e: any) => handleChange("altitudeMax", e)}
          />
          <FormNumberField
            label="Depth"
            value={resistivity.depth}
            onChange={(e: any) => handleChange("depth", e)}
          />

          <FormNumberField
            label="Distance"
            value={resistivity.distance}
            onChange={(e: any) => handleChange("distance", e)}
          />

          <FormNumberField
            label="Resistivity"
            value={resistivity.resistivity}
            onChange={(e: any) => handleChange("resistivity", e)}
          />

          <FormTextField
            label="Resistivity Profile Directory"
            value={resistivity.resistivityProfileDirectory}
            onChange={(e: any) =>
              handleChange("resistivityProfileDirectory", e)
            }
          />

          <FormTextField
            label="Explanation"
            value={resistivity.explanation}
            onChange={(e: any) => handleChange("explanation", e)}
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 pt-4">
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
}

export default SetResistivityData;
