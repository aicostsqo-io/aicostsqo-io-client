import React, { useState } from "react";
import {
  FormNumberField,
  FormSelectField,
  FormTextField,
} from "../core-form-elements";

const initialState = {
  rectangleNumber: "",
  shape: "",
  longitudinalProfileNumber: "",
  traversalProfileNumber: "",
  distance: "",
  spacing: "",
  dimension: "",
  positionX: "",
  positionY: "",
  positionZ: "",
  antenna: "",
  longitudinalProfilesDirectory: "",
  longitudinalProfilesMaxDepth: "",
  longitudinalProfilesMaxDistance: "",
  traversalProfilesDirectory: "",
  traversalProfilesMaxDepth: "",
  traversalProfilesMaxDistance: "",
  mapReferenceSystemForStartOfLongitudinalProfiles: "",
  mapReferenceSystemForStartOfTransversalProfiles: "",
  vertex1: {
    startOfLongitudinalProfilesX: "",
    startOfLongitudinalProfilesY: "",
    startOfLongitudinalProfilesZ: "",
    endOfLongitudinalProfilesX: "",
    endOfLongitudinalProfilesY: "",
    endOfLongitudinalProfilesZ: "",
    startOfTraversalProfilesX: "",
    startOfTraversalProfilesY: "",
    startOfTraversalProfilesZ: "",
    endOfTraversalProfilesX: "",
    endOfTraversalProfilesY: "",
    endOfTraversalProfilesZ: "",
  },
  vertex2: {
    startOfLongitudinalProfilesX: "",
    startOfLongitudinalProfilesY: "",
    startOfLongitudinalProfilesZ: "",
    endOfLongitudinalProfilesX: "",
    endOfLongitudinalProfilesY: "",
    endOfLongitudinalProfilesZ: "",
    startOfTraversalProfilesX: "",
    startOfTraversalProfilesY: "",
    startOfTraversalProfilesZ: "",
    endOfTraversalProfilesX: "",
    endOfTraversalProfilesY: "",
    endOfTraversalProfilesZ: "",
  },
  explanation: "",
};
const shapeTypes = [
  {
    name: "Circular",
  },
  {
    name: "Triangular",
  },
  {
    name: "Quadratic",
  },
];

const dimensions = [
  {
    name: "1D",
  },
  {
    name: "2D",
  },
  {
    name: "3D",
  },
];

const referenceSystems = [
  {
    name: "GPS",
  },
  {
    name: "WGS84",
  },
  {
    name: "ITRF96",
  },
];

export default function SetGPRData({ setInfo, setStep }: any) {
  const [gpr, setGpr] = useState<any>(initialState);
  const handleChange = (field: any, event: any) => {
    setGpr({ ...gpr, [field]: event.target.value });
  };
  const handleSaveAndProceed = () => {
    setStep(1);
    //TODO: setInfo kullanılarak gpr bilgisi set edilecek.
  };
  const handleCancel = () => {
    setGpr(initialState);
  };
  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Rectangle Number"
            value={gpr.rectangleNumber}
            min={0}
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
            min={0}
            onChange={(e: any) => handleChange("longitudinalProfileNumber", e)}
          />
          <FormNumberField
            label="Traversal Profile Number"
            value={gpr.traversalProfileNumber}
            min={0}
            onChange={(e: any) => handleChange("traversalProfileNumber", e)}
          />
          <FormNumberField
            label="Distance"
            value={gpr.distance}
            min={0}
            onChange={(e: any) => handleChange("distance", e)}
          />
          <FormNumberField
            label="Spacing"
            value={gpr.spacing}
            min={0}
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
            min={0}
            onChange={(e: any) => handleChange("positionX", e)}
          />
          <FormNumberField
            label="PositionY"
            value={gpr.positionY}
            min={0}
            onChange={(e: any) => handleChange("positionY", e)}
          />
          <FormNumberField
            label="PositionZ"
            value={gpr.positionZ}
            min={0}
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
            min={0}
            onChange={(e: any) =>
              handleChange("longitudinalProfilesMaxDepth", e)
            }
          />
          <FormNumberField
            label="Longitudinal Profiles Max Distance"
            value={gpr.longitudinalProfilesMaxDistance}
            min={0}
            onChange={(e: any) =>
              handleChange("longitudinalProfilesMaxDistance", e)
            }
          />
          <FormTextField
            label="Traversal Profiles Directory"
            value={gpr.traversalProfilesDirectory}
            onChange={(e: any) => handleChange("traversalProfilesDirectory", e)}
          />
          <FormNumberField
            label="Traversal Profiles Max Depth"
            value={gpr.traversalProfilesMaxDepth}
            min={0}
            onChange={(e: any) => handleChange("traversalProfilesMaxDepth", e)}
          />
          <FormNumberField
            label="Traversal Profiles Max Distance"
            value={gpr.traversalProfilesMaxDistance}
            min={0}
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
              handleChange("mapReferenceSystemForStartOfTransversalProfiles", e)
            }
          />
          <FormNumberField
            label="Vertex 1 Start Of Longitudinal Profiles X"
            value={gpr.vertex1.startOfLongitudinalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.startOfLongitudinalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 1 Start Of Longitudinal Profiles Y"
            value={gpr.vertex1.startOfLongitudinalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.startOfLongitudinalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 1 Start Of Longitudinal Profiles Z"
            value={gpr.vertex1.startOfLongitudinalProfilesZ}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.startOfLongitudinalProfilesZ", e)
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormNumberField
            label="Vertex 1 End Of Longitudinal Profiles X"
            value={gpr.vertex1.endOfLongitudinalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.endOfLongitudinalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 1 End Of Longitudinal Profiles Y"
            value={gpr.vertex1.endOfLongitudinalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.endOfLongitudinalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 1 End Of Longitudinal Profiles Z"
            value={gpr.vertex1.endOfLongitudinalProfilesZ}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.endOfLongitudinalProfilesZ", e)
            }
          />
          <FormNumberField
            label="Vertex 1 Start Of Traversal Profiles X"
            value={gpr.vertex1.startOfTraversalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.startOfTraversalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 1 Start Of Traversal Profiles Y"
            value={gpr.vertex1.startOfTraversalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.startOfTraversalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 1 Start Of Traversal Profiles Z"
            value={gpr.vertex1.startOfTraversalProfilesZ}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.startOfTraversalProfilesZ", e)
            }
          />
          <FormNumberField
            label="Vertex 1 End Of Traversal Profiles X"
            value={gpr.vertex1.endOfTraversalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.endOfTraversalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 1 End Of Traversal Profiles Y"
            value={gpr.vertex1.endOfTraversalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.endOfTraversalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 1 End Of Traversal Profiles Z"
            value={gpr.vertex1.endOfTraversalProfilesZ}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex1.endOfTraversalProfilesZ", e)
            }
          />
          <FormNumberField
            label="Vertex 2 Start Of Longitudinal Profiles X"
            value={gpr.vertex2.startOfLongitudinalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.startOfLongitudinalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 2 Start Of Longitudinal Profiles Y"
            value={gpr.vertex2.startOfLongitudinalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.startOfLongitudinalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 2 Start Of Longitudinal Profiles Z"
            value={gpr.vertex2.startOfLongitudinalProfilesZ}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.startOfLongitudinalProfilesZ", e)
            }
          />
          <FormNumberField
            label="Vertex 2 End Of Longitudinal Profiles X"
            value={gpr.vertex2.endOfLongitudinalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.endOfLongitudinalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 2 End Of Longitudinal Profiles Y"
            value={gpr.vertex2.endOfLongitudinalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.endOfLongitudinalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 2 End Of Longitudinal Profiles Z"
            value={gpr.vertex2.endOfLongitudinalProfilesZ}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.endOfLongitudinalProfilesZ", e)
            }
          />
          <FormNumberField
            label="Vertex 2 Start Of Traversal Profiles X"
            value={gpr.vertex2.startOfTraversalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.startOfTraversalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 2 Start Of Traversal Profiles Y"
            value={gpr.vertex2.startOfTraversalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.startOfTraversalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 2 Start Of Traversal Profiles Z"
            value={gpr.vertex2.startOfTraversalProfilesZ}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.startOfTraversalProfilesZ", e)
            }
          />
          <FormNumberField
            label="Vertex 2 End Of Traversal Profiles X"
            value={gpr.vertex2.endOfTraversalProfilesX}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.endOfTraversalProfilesX", e)
            }
          />
          <FormNumberField
            label="Vertex 2 End Of Traversal Profiles Y"
            value={gpr.vertex2.endOfTraversalProfilesY}
            min={0}
            onChange={(e: any) =>
              handleChange("vertex2.endOfTraversalProfilesY", e)
            }
          />
          <FormNumberField
            label="Vertex 2 End Of Traversal Profiles Z"
            value={gpr.vertex2.endOfTraversalProfilesZ}
            min={0}
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
