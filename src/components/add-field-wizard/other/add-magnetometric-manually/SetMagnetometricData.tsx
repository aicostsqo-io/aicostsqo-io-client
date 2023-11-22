import { Magnetometric } from "@/types/models/magnetometric";
import React, { useState } from "react";
import { FormNumberField, FormTextField } from "../core-form-elements";
import { toast } from "react-toastify";
type SetMagnetometricDataProps = {
  onProceed: (magnetometric: any) => void;
};

const initialState: Magnetometric = {
  magnetometricMeasurementId: 0,
  profileNumber: 0,
  latitudeMin: 0,
  longitudeMin: 0,
  altitudeMin: 0,
  latitudeMax: 0,
  longitudeMax: 0,
  altitudeMax: 0,
  magnetometricProfileDirectory: "",
  explanation: "",
  discs: [],
};

function SetMagnetometricData({ onProceed }: SetMagnetometricDataProps) {
  const [magnetometric, setMagnetometric] =
    useState<Magnetometric>(initialState);

  const handleChange = (field: any, event: any) => {
    const updatedMagnetometric = { ...magnetometric };
    const fieldPath = field.split(".");
    let currentLevel: any = updatedMagnetometric;
    for (let i = 0; i < fieldPath.length - 1; i++) {
      currentLevel = currentLevel[fieldPath[i]];
    }
    currentLevel[fieldPath[fieldPath.length - 1]] = event.target.value;
    setMagnetometric(updatedMagnetometric);
  };

  const handleSaveAndProceed = () => {
    toast.success("Proceeding to add discs");
    onProceed(magnetometric);
  };

  const handleCancel = () => {
    setMagnetometric(initialState);
    toast.success("Contents cleared!");
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Magnetometric Measurement ID"
            value={magnetometric.magnetometricMeasurementId}
            onChange={(e: any) => handleChange("magnetometricMeasurementId", e)}
          />

          <FormNumberField
            label="Profile Number"
            value={magnetometric.profileNumber}
            onChange={(e: any) => handleChange("profileNumber", e)}
          />

          <FormNumberField
            label="Latitude Min"
            value={magnetometric.latitudeMin}
            onChange={(e: any) => handleChange("latitudeMin", e)}
          />

          <FormNumberField
            label="Longitude Min"
            value={magnetometric.longitudeMin}
            onChange={(e: any) => handleChange("longitudeMin", e)}
          />

          <FormNumberField
            label="Altitude Min"
            value={magnetometric.altitudeMin}
            onChange={(e: any) => handleChange("altitudeMin", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Latitude Max"
            value={magnetometric.latitudeMax}
            onChange={(e: any) => handleChange("latitudeMax", e)}
          />

          <FormNumberField
            label="Longitude Max"
            value={magnetometric.longitudeMax}
            onChange={(e: any) => handleChange("longitudeMax", e)}
          />

          <FormNumberField
            label="Altitude Max"
            value={magnetometric.altitudeMax}
            onChange={(e: any) => handleChange("altitudeMax", e)}
          />

          <FormTextField
            label="Magnetometric Profile Directory"
            value={magnetometric.magnetometricProfileDirectory}
            onChange={(e: any) =>
              handleChange("magnetometricProfileDirectory", e)
            }
          />

          <FormTextField
            label="Explanation"
            value={magnetometric.explanation}
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

export default SetMagnetometricData;
