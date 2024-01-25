import { useState } from "react";
import { toast } from "react-toastify";
import RPForm from "./RPForm";

const initialState = {
  siteBoundId: "",
  slopeAngle: "",
  crepeAngle: "",
  volume: "",
  sizeX: "",
  sizeY: "",
  sizeZ: "",
  positionX: "",
  positionY: "",
  positionZ: "",
  rotationX: "",
  rotationY: "",
  rotationZ: "",
};

const AddRP = ({ next, method }: any) => {
  const [rp, setRp] = useState<any>(initialState);
  const [rps, setRps] = useState<any>([]);

  const handleAddRp = () => {
    // check if rp fields are empty
    const rpFields = Object.keys(rp);
    for (const field of rpFields) {
      if (Array.isArray(rp[field])) continue;
      if (rp[field] === "") {
        toast.error("Please fill all the fields");
        return;
      }
    }

    setRps({
      ...rps,
      rp,
    });
    setRp(initialState);
    toast.success("RP added successfully");
  };

  const handleAddRps = () => {
    next();
  };

  return (
    <div className="modal-container h-min p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">
        RP - Add {method === "manual" ? "Manually" : "from Excel"}
      </div>

      {method === "manual" ? (
        <RPForm rp={rp} setRp={setRp} handleAddRp={handleAddRp} />
      ) : (
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-700">
            Excel Dosyası Yükle
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              className="p-2 border rounded-md"
              //   onChange={handleFileChange}
            />
            <button
              type="button"
              className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              //   onClick={handleUploadClick}
            >
              Yükle
            </button>
          </div>
        </div>
      )}

      <div
        className="mt-2 w-full bg-black text-white text-center cursor-pointer py-2 px-5 text-lg"
        onClick={handleAddRps}
      >
        Next
      </div>
    </div>
  );
};

export default AddRP;
