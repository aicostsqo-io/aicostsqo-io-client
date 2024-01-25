import { useState } from "react";
import { toast } from "react-toastify";
import DiscForm from "./DiscForm";
import DiscExcel from "./DiscExcel";
import { createDiscsByManual } from "@/api/disc";

const initialState = {
  siteBound: "",
  rpId: "",
  dip: "",
  dipDirect: "",
  pX: "",
  pY: "",
  pZ: "",
  nX: "",
  nY: "",
  nZ: "",
  type: "Deterministic",
};

const AddDisc = ({ method }: any) => {
  const [disc, setDisc] = useState<any>(initialState);
  const [discs, setDiscs] = useState<any>([]);

  const handleAddDisc = () => {
    const discFields = Object.keys(disc);
    for (const field of discFields) {
      if (Array.isArray(disc[field])) continue;
      if (disc[field] === "") {
        console.log("field", field);
        toast.error("Please fill all the fields");
        return;
      }
    }

    setDiscs([...discs, disc]);
    setDisc(initialState);
    toast.success("Discontinuities added successfully");
  };

  const handleAddDiscs = async () => {
    try {
      await createDiscsByManual(discs);
      toast.success("Discontinuities added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-container h-min p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">
        Discontinuities - Add {method === "manual" ? "Manually" : "from Excel"}
      </div>

      {method === "manual" ? (
        <DiscForm disc={disc} setDisc={setDisc} handleAddDisc={handleAddDisc} />
      ) : (
        <DiscExcel />
      )}

      <div
        className="mt-2 w-full bg-black text-white text-center cursor-pointer py-2 px-5 text-lg"
        onClick={handleAddDiscs}
      >
        Add Discontinuities to RP
      </div>
    </div>
  );
};

export default AddDisc;
