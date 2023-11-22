import { Televiewer } from "@/types/models/televiewer";
import React, { useState } from "react";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../core-form-elements";
import { toast } from "react-toastify";
type SetTeleviewerDataProps = {
  onProceed: (televiewer: any) => void;
};

const initialState: Televiewer = {
  type: "",
  sizeX: 0,
  sizeY: 0,
  sizeZ: 0,
  positionX: 0,
  positionY: 0,
  positionZ: 0,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
  holeNumber: 0,
  xHole: "",
  yHole: "",
  zHole: "",
  holeVerticalAngle: "",
  direction: "",
  lengthOfHole: 0,
  diameterCore: 0,
  explanation: "",
  imageDimensionA: 0,
  imageDimensionB: 0,
  perimeterX: 0,
  zSliceZ: 0,
  radiusPixels: 0,
  discs: [],
};

function SetTeleviewerData({ onProceed }: SetTeleviewerDataProps) {
  const [televiewer, setTeleviewer] = useState<Televiewer>(initialState);

  const handleChange = (field: any, event: any) => {
    const updatedTeleviewer = { ...televiewer };
    const fieldPath = field.split(".");
    let currentLevel: any = updatedTeleviewer;
    for (let i = 0; i < fieldPath.length - 1; i++) {
      currentLevel = currentLevel[fieldPath[i]];
    }
    currentLevel[fieldPath[fieldPath.length - 1]] = event.target.value;
    setTeleviewer(updatedTeleviewer);
  };

  const handleSaveAndProceed = () => {
    toast.success("Proceeding to add discs");
    onProceed(televiewer);
  };

  const handleCancel = () => {
    setTeleviewer(initialState);
    toast.success("Contents cleared!");
  };

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormSelectField
            label="Type"
            value={televiewer.type}
            onChange={(e: any) => handleChange("type", e)}
            data={[{ name: "Optical" }, { name: "Acoustic" }]}
          />

          <FormNumberField
            label="Size X"
            value={televiewer.sizeX}
            onChange={(e: any) => handleChange("sizeX", e)}
          />

          <FormNumberField
            label="Size Y"
            value={televiewer.sizeY}
            onChange={(e: any) => handleChange("sizeY", e)}
          />

          <FormNumberField
            label="Size Z"
            value={televiewer.sizeZ}
            onChange={(e: any) => handleChange("sizeZ", e)}
          />

          <FormNumberField
            label="Position X"
            value={televiewer.positionX}
            onChange={(e: any) => handleChange("positionX", e)}
          />

          <FormNumberField
            label="Position Y"
            value={televiewer.positionY}
            onChange={(e: any) => handleChange("positionY", e)}
          />

          <FormNumberField
            label="Position Z"
            value={televiewer.positionZ}
            onChange={(e: any) => handleChange("positionZ", e)}
          />

          <FormNumberField
            label="Rotation X"
            value={televiewer.rotationX}
            onChange={(e: any) => handleChange("rotationX", e)}
          />

          <FormNumberField
            label="Rotation Y"
            value={televiewer.rotationY}
            onChange={(e: any) => handleChange("rotationY", e)}
          />

          <FormNumberField
            label="Rotation Z"
            value={televiewer.rotationZ}
            onChange={(e: any) => handleChange("rotationZ", e)}
          />

          <FormNumberField
            label="Hole Number"
            value={televiewer.holeNumber}
            onChange={(e: any) => handleChange("holeNumber", e)}
          />

          <FormTextField
            label="X Hole"
            value={televiewer.xHole}
            onChange={(e: any) => handleChange("xHole", e)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormTextField
            label="Y Hole"
            value={televiewer.yHole}
            onChange={(e: any) => handleChange("yHole", e)}
          />

          <FormTextField
            label="Z Hole"
            value={televiewer.zHole}
            onChange={(e: any) => handleChange("zHole", e)}
          />

          <FormTextField
            label="Hole Vertical Angle"
            value={televiewer.holeVerticalAngle}
            onChange={(e: any) => handleChange("holeVerticalAngle", e)}
          />

          <FormTextField
            label="Direction"
            value={televiewer.direction}
            onChange={(e: any) => handleChange("direction", e)}
          />

          <FormNumberField
            label="Length of Hole"
            value={televiewer.lengthOfHole}
            onChange={(e: any) => handleChange("lengthOfHole", e)}
          />

          <FormNumberField
            label="Diameter Core"
            value={televiewer.diameterCore}
            onChange={(e: any) => handleChange("diameterCore", e)}
          />

          <FormTextField
            label="Explanation"
            value={televiewer.explanation}
            onChange={(e: any) => handleChange("explanation", e)}
          />

          <FormNumberField
            label="Image Dimension A"
            value={televiewer.imageDimensionA}
            onChange={(e: any) => handleChange("imageDimensionA", e)}
          />

          <FormNumberField
            label="Image Dimension B"
            value={televiewer.imageDimensionB}
            onChange={(e: any) => handleChange("imageDimensionB", e)}
          />

          <FormNumberField
            label="Perimeter X"
            value={televiewer.perimeterX}
            onChange={(e: any) => handleChange("perimeterX", e)}
          />

          <FormNumberField
            label="Z Slice Z"
            value={televiewer.zSliceZ}
            onChange={(e: any) => handleChange("zSliceZ", e)}
          />

          <FormNumberField
            label="Radius Pixels"
            value={televiewer.radiusPixels}
            onChange={(e: any) => handleChange("radiusPixels", e)}
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

export default SetTeleviewerData;
