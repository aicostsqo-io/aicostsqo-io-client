import React, { useState } from "react";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../core-form-elements";
import { Seismic } from "@/types/models/seismic";

const initialState: Seismic = {
  measurementId: 0,
  shape: "",
  profilNumber: 0,
  geophones: 0,
  spacing: 0,
  shots: 0,
  length: 0,
  locationAngle: 0,
  profileLocationX: 0,
  profileLocationY: 0,
  profileLocationZ: 0,
  endOfTheSeismicProfile: 0,
  discs: [],
  profiles: [],
};

type SetSeismicDataProps = {
  onProceed: (seismic: any) => void;
};

export default function SetSeismicData({ onProceed }: SetSeismicDataProps) {
  const [seismic, setSeismic] = useState<Seismic>(initialState);

  const handleChange = (field: any, event: any) => {
    const updatedSeismic = { ...seismic };
    const fieldPath = field.split(".");
    let currentLevel: any = updatedSeismic;
    for (let i = 0; i < fieldPath.length - 1; i++) {
      currentLevel = currentLevel[fieldPath[i]];
    }
    currentLevel[fieldPath[fieldPath.length - 1]] = event.target.value;
    setSeismic(updatedSeismic);
  };

  const handleSaveAndProceed = () => {
    onProceed(seismic);
  };

  const handleCancel = () => {
    setSeismic(initialState);
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Measurement ID"
            value={seismic.measurementId}
            onChange={(e: any) => handleChange("measurementId", e)}
          />

          <FormSelectField
            label="Shape"
            value={seismic.shape}
            data={[{ name: "Mesh" }, { name: "Line" }]}
            onChange={(e: any) => handleChange("shape", e)}
          />

          <FormNumberField
            label="Profile Number"
            value={seismic.profilNumber}
            onChange={(e: any) => handleChange("profilNumber", e)}
          />

          <FormNumberField
            label="Geophones"
            value={seismic.geophones}
            onChange={(e: any) => handleChange("geophones", e)}
          />

          <FormNumberField
            label="Spacing"
            value={seismic.spacing}
            onChange={(e: any) => handleChange("spacing", e)}
          />

          <FormNumberField
            label="Shots"
            value={seismic.shots}
            onChange={(e: any) => handleChange("shots", e)}
          />

          <FormNumberField
            label="Length"
            value={seismic.length}
            onChange={(e: any) => handleChange("length", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Location Angle"
            value={seismic.locationAngle}
            onChange={(e: any) => handleChange("locationAngle", e)}
          />

          <FormNumberField
            label="Profile Location X"
            value={seismic.profileLocationX}
            onChange={(e: any) => handleChange("profileLocationX", e)}
          />

          <FormNumberField
            label="Profile Location Y"
            value={seismic.profileLocationY}
            onChange={(e: any) => handleChange("profileLocationY", e)}
          />

          <FormNumberField
            label="Profile Location Z"
            value={seismic.profileLocationZ}
            onChange={(e: any) => handleChange("profileLocationZ", e)}
          />

          <FormNumberField
            label="End of the Seismic Profile"
            value={seismic.endOfTheSeismicProfile}
            onChange={(e: any) => handleChange("endOfTheSeismicProfile", e)}
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
