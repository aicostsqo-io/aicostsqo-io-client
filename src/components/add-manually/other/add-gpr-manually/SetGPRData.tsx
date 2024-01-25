import React, { useState } from "react";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../../../add-field-wizard/other/core-form-elements";
import { Gpr } from "@/types/models/gpr";
import {
  dimensions,
  referenceSystems,
  shapeTypes,
} from "@/utils/constants/gpr";
import { toast } from "react-toastify";
import GPRExcel from "./GPRExcel";

const initialState: Gpr = {
  rectangleNumber: 0,
  shape: "Quadratic",
  longitudinalProfileNumber: 0,
  traversalProfileNumber: 0,
  distance: 0,
  spacing: 0,
  dimension: "3D",
  positionX: 0,
  positionY: 0,
  positionZ: 0,
  antenna: "",
  longitudinalProfilesDirectory: "",
  longitudinalProfilesMaxDepth: 0,
  longitudinalProfilesMaxDistance: 0,
  traversalProfilesDirectory: "",
  traversalProfilesMaxDepth: 0,
  traversalProfilesMaxDistance: 0,
  mapReferenceSystemForStartOfLongitudinalProfiles: "GPS",
  mapReferenceSystemForStartOfTransversalProfiles: "GPS",
  vertex1: {
    startOfLongitudinalProfilesX: 0,
    startOfLongitudinalProfilesY: 0,
    startOfLongitudinalProfilesZ: 0,
    endOfLongitudinalProfilesX: 0,
    endOfLongitudinalProfilesY: 0,
    endOfLongitudinalProfilesZ: 0,
    startOfTraversalProfilesX: 0,
    startOfTraversalProfilesY: 0,
    startOfTraversalProfilesZ: 0,
    endOfTraversalProfilesX: 0,
    endOfTraversalProfilesY: 0,
    endOfTraversalProfilesZ: 0,
  },
  vertex2: {
    startOfLongitudinalProfilesX: 0,
    startOfLongitudinalProfilesY: 0,
    startOfLongitudinalProfilesZ: 0,
    endOfLongitudinalProfilesX: 0,
    endOfLongitudinalProfilesY: 0,
    endOfLongitudinalProfilesZ: 0,
    startOfTraversalProfilesX: 0,
    startOfTraversalProfilesY: 0,
    startOfTraversalProfilesZ: 0,
    endOfTraversalProfilesX: 0,
    endOfTraversalProfilesY: 0,
    endOfTraversalProfilesZ: 0,
  },
  explanation: "",
  discs: [],
  profiles: [],
};

type SetGPRDataProps = {
  method: string;
};

export default function SetGPRData({ method }: SetGPRDataProps) {
  const [gpr, setGpr] = useState<any>(initialState);

  const handleChange = (field: any, event: any) => {
    const updatedGpr = { ...gpr };
    const fieldPath = field.split(".");
    let currentLevel: any = updatedGpr;
    for (let i = 0; i < fieldPath.length - 1; i++) {
      currentLevel = currentLevel[fieldPath[i]];
    }
    currentLevel[fieldPath[fieldPath.length - 1]] = event.target.value;
    setGpr(updatedGpr);
  };

  const handleSaveAndProceed = () => {
    // check if gpr fields are empty
    const gprFields = Object.keys(gpr);
    for (const field of gprFields) {
      if (Array.isArray(gpr[field])) continue;
      if (gpr[field] === "") {
        toast.error("Please fill all the fields");
        return;
      }
    }

    toast.success("Proceeding to add discs");
    // onProceed(gpr);
    setGpr(initialState);
  };

  const handleCancel = () => {
    setGpr(initialState);
    toast.success("Contents cleared!");
  };

  return (
    <>
      <div className="flex flex-row gap-20 modal-container p-10">
        <div className="modal-container-title">
          GPR Info - Add {method === "manual" ? "Manually" : "from Excel"}
        </div>
        {method === "manual" ? (
          <>
            <div className="flex flex-col gap-4">
              <FormNumberField
                label="Rectangle Number"
                value={gpr.rectangleNumber}
                onChange={(e: any) => handleChange("rectangleNumber", e)}
              />
              <FormSelectField
                label="Shape"
                value={gpr.shape}
                onChange={(e: any) => handleChange("shape", e)}
                data={shapeTypes}
              />
              <FormNumberField
                label="Longitudinal Profile Number"
                value={gpr.longitudinalProfileNumber}
                onChange={(e: any) =>
                  handleChange("longitudinalProfileNumber", e)
                }
              />
              <FormNumberField
                label="Traversal Profile Number"
                value={gpr.traversalProfileNumber}
                onChange={(e: any) => handleChange("traversalProfileNumber", e)}
              />
              <FormNumberField
                label="Distance"
                value={gpr.distance}
                onChange={(e: any) => handleChange("distance", e)}
              />
              <FormNumberField
                label="Spacing"
                value={gpr.spacing}
                onChange={(e: any) => handleChange("spacing", e)}
              />
              <FormSelectField
                label="Dimension"
                value={gpr.dimension}
                onChange={(e: any) => handleChange("dimension", e)}
                data={dimensions}
              />
              <FormNumberField
                label="PositionX"
                value={gpr.positionX}
                onChange={(e: any) => handleChange("positionX", e)}
              />
              <FormNumberField
                label="PositionY"
                value={gpr.positionY}
                onChange={(e: any) => handleChange("positionY", e)}
              />
              <FormNumberField
                label="PositionZ"
                value={gpr.positionZ}
                onChange={(e: any) => handleChange("positionZ", e)}
              />
              <FormTextField
                label="Antenna"
                value={gpr.antenna}
                onChange={(e: any) => handleChange("antenna", e)}
              />
              <FormTextField
                label="Longitudinal Profiles Directory"
                value={gpr.longitudinalProfilesDirectory}
                onChange={(e: any) =>
                  handleChange("longitudinalProfilesDirectory", e)
                }
              />
              <FormNumberField
                label="Longitudinal Profiles Max Depth"
                value={gpr.longitudinalProfilesMaxDepth}
                onChange={(e: any) =>
                  handleChange("longitudinalProfilesMaxDepth", e)
                }
              />
              <FormNumberField
                label="Longitudinal Profiles Max Distance"
                value={gpr.longitudinalProfilesMaxDistance}
                onChange={(e: any) =>
                  handleChange("longitudinalProfilesMaxDistance", e)
                }
              />
              <FormTextField
                label="Traversal Profiles Directory"
                value={gpr.traversalProfilesDirectory}
                onChange={(e: any) =>
                  handleChange("traversalProfilesDirectory", e)
                }
              />
              <FormNumberField
                label="Traversal Profiles Max Depth"
                value={gpr.traversalProfilesMaxDepth}
                onChange={(e: any) =>
                  handleChange("traversalProfilesMaxDepth", e)
                }
              />
              <FormNumberField
                label="Traversal Profiles Max Distance"
                value={gpr.traversalProfilesMaxDistance}
                onChange={(e: any) =>
                  handleChange("traversalProfilesMaxDistance", e)
                }
              />
              <FormSelectField
                label="Map Reference System For Start Of Longitudinal Profiles"
                value={gpr.mapReferenceSystemForStartOfLongitudinalProfiles}
                data={referenceSystems}
                onChange={(e: any) =>
                  handleChange(
                    "mapReferenceSystemForStartOfLongitudinalProfiles",
                    e
                  )
                }
              />
              <FormSelectField
                label="Map Reference System For Start Of Transversal Profiles"
                value={gpr.mapReferenceSystemForStartOfTransversalProfiles}
                data={referenceSystems}
                onChange={(e: any) =>
                  handleChange(
                    "mapReferenceSystemForStartOfTransversalProfiles",
                    e
                  )
                }
              />
              <FormNumberField
                label="Vertex 1 Start Of Longitudinal Profiles X"
                value={gpr.vertex1.startOfLongitudinalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex1.startOfLongitudinalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 1 Start Of Longitudinal Profiles Y"
                value={gpr.vertex1.startOfLongitudinalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex1.startOfLongitudinalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 1 Start Of Longitudinal Profiles Z"
                value={gpr.vertex1.startOfLongitudinalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex1.startOfLongitudinalProfilesZ", e)
                }
              />
            </div>
            <div className="flex flex-col gap-4">
              <FormNumberField
                label="Vertex 1 End Of Longitudinal Profiles X"
                value={gpr.vertex1.endOfLongitudinalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex1.endOfLongitudinalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 1 End Of Longitudinal Profiles Y"
                value={gpr.vertex1.endOfLongitudinalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex1.endOfLongitudinalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 1 End Of Longitudinal Profiles Z"
                value={gpr.vertex1.endOfLongitudinalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex1.endOfLongitudinalProfilesZ", e)
                }
              />
              <FormNumberField
                label="Vertex 1 Start Of Traversal Profiles X"
                value={gpr.vertex1.startOfTraversalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex1.startOfTraversalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 1 Start Of Traversal Profiles Y"
                value={gpr.vertex1.startOfTraversalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex1.startOfTraversalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 1 Start Of Traversal Profiles Z"
                value={gpr.vertex1.startOfTraversalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex1.startOfTraversalProfilesZ", e)
                }
              />
              <FormNumberField
                label="Vertex 1 End Of Traversal Profiles X"
                value={gpr.vertex1.endOfTraversalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex1.endOfTraversalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 1 End Of Traversal Profiles Y"
                value={gpr.vertex1.endOfTraversalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex1.endOfTraversalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 1 End Of Traversal Profiles Z"
                value={gpr.vertex1.endOfTraversalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex1.endOfTraversalProfilesZ", e)
                }
              />
              <FormNumberField
                label="Vertex 2 Start Of Longitudinal Profiles X"
                value={gpr.vertex2.startOfLongitudinalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex2.startOfLongitudinalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 2 Start Of Longitudinal Profiles Y"
                value={gpr.vertex2.startOfLongitudinalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex2.startOfLongitudinalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 2 Start Of Longitudinal Profiles Z"
                value={gpr.vertex2.startOfLongitudinalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex2.startOfLongitudinalProfilesZ", e)
                }
              />
              <FormNumberField
                label="Vertex 2 End Of Longitudinal Profiles X"
                value={gpr.vertex2.endOfLongitudinalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex2.endOfLongitudinalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 2 End Of Longitudinal Profiles Y"
                value={gpr.vertex2.endOfLongitudinalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex2.endOfLongitudinalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 2 End Of Longitudinal Profiles Z"
                value={gpr.vertex2.endOfLongitudinalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex2.endOfLongitudinalProfilesZ", e)
                }
              />
              <FormNumberField
                label="Vertex 2 Start Of Traversal Profiles X"
                value={gpr.vertex2.startOfTraversalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex2.startOfTraversalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 2 Start Of Traversal Profiles Y"
                value={gpr.vertex2.startOfTraversalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex2.startOfTraversalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 2 Start Of Traversal Profiles Z"
                value={gpr.vertex2.startOfTraversalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex2.startOfTraversalProfilesZ", e)
                }
              />
              <FormNumberField
                label="Vertex 2 End Of Traversal Profiles X"
                value={gpr.vertex2.endOfTraversalProfilesX}
                onChange={(e: any) =>
                  handleChange("vertex2.endOfTraversalProfilesX", e)
                }
              />
              <FormNumberField
                label="Vertex 2 End Of Traversal Profiles Y"
                value={gpr.vertex2.endOfTraversalProfilesY}
                onChange={(e: any) =>
                  handleChange("vertex2.endOfTraversalProfilesY", e)
                }
              />
              <FormNumberField
                label="Vertex 2 End Of Traversal Profiles Z"
                value={gpr.vertex2.endOfTraversalProfilesZ}
                onChange={(e: any) =>
                  handleChange("vertex2.endOfTraversalProfilesZ", e)
                }
              />
              <FormTextField
                label="Explanation"
                value={gpr.explanation}
                onChange={(e: any) => handleChange("explanation", e)}
              />
            </div>
          </>
        ) : (
          <GPRExcel />
        )}
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
