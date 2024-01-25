import { useState } from "react";
import { toast } from "react-toastify";
import RPForm from "./RPForm";
import { createRpsByManual } from "@/api/rp";
import RPExcel from "./RPExcel";

const initialState = {
  siteBound: "",
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

const AddRP = ({ method }: any) => {
  const [rp, setRp] = useState<any>(initialState);
  const [rps, setRps] = useState<any>([]);

  const handleAddRp = (rpLength: number) => {
    const rpFields = Object.keys(rp);
    for (const field of rpFields) {
      if (Array.isArray(rp[field])) continue;
      if (rp[field] === "") {
        console.log("field", field);
        toast.error("Please fill all the fields");
        return;
      }
    }

    const randomThreeDigitNumber = Math.floor(100 + Math.random() * 900);

    setRps([
      ...rps,
      {
        ...rp,
        name: `RP ${randomThreeDigitNumber}`,
      },
    ]);
    setRp(initialState);
    toast.success("RP added successfully");
  };

  const handleAddRps = async () => {
    try {
      const res = await createRpsByManual(rps);
      if (res.status === 200) {
        setRps([]);
        setRp(initialState);
        toast.success("RPs added successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-container h-min p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">
        RP - Add {method === "manual" ? "Manually" : "from Excel"}
      </div>

      {method === "manual" ? (
        <RPForm rp={rp} setRp={setRp} handleAddRp={handleAddRp} />
      ) : (
        <RPExcel />
      )}

      <div
        className="mt-2 w-full bg-black text-white text-center cursor-pointer py-2 px-5 text-lg"
        onClick={handleAddRps}
      >
        Add RPs to Site
      </div>
    </div>
  );
};

export default AddRP;
