import { createGPR } from "@/api/gpr";
import { useSiteContext } from "@/contexts/Site";
import React, { useState } from "react";
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

interface Props {
  onClose: () => void;
  refetch: () => void;
}

const initialState: Gpr = {
  rectangleNumber: 0,
  shape: "",
  longitudinalProfileNumber: 0,
  traversalProfileNumber: 0,
  distance: 0,
  spacing: 0,
  dimension: "",
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
  mapReferenceSystemForStartOfLongitudinalProfiles: 0,
  mapReferenceSystemForStartOfTransversalProfiles: 0,
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

const AddGPRModal = ({ onClose, refetch }: Props) => {
  const [gpr, setGpr] = useState<any>(initialState);
  const { selectedSite } = useSiteContext();

  const handleAddGPR = async () => {
    //TODO: validation
    for (let value of Object.values(gpr)) {
      if (!value) {
        toast.error("Please fill all fields");
        return;
      }
    }
    try {
      await createGPR({
        ...gpr,
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
    const updatedGpr = { ...gpr };
    const fieldPath = field.split(".");
    let currentLevel: any = updatedGpr;
    for (let i = 0; i < fieldPath.length - 1; i++) {
      currentLevel = currentLevel[fieldPath[i]];
    }
    currentLevel[fieldPath[fieldPath.length - 1]] = event.target.value;
    setGpr(updatedGpr);
  };

  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 w-full flex justify-center items-center overflow-scroll z-[100] tracking-wider">
      <div className="bg-white text-black radius-lg w-2/3 flex flex-col min-h-[300px] max-h-screen">
        <div className="modal-header py-3 px-7 flex justify-between border-b border-slate-600 border-opacity-50">
          <span className="modal-header-title font-bold">Add GPR</span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <div className="modal-body px-7 pt-5 pb-5 flex flex-col gap-2  overflow-auto flex-1">
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
          <div className="flex flex-col gap-4">
            <div
              className="bg-black text-white justify-between w-full mt-3 py-2 rounded text-center cursor-pointer"
              onClick={handleAddGPR}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGPRModal;
