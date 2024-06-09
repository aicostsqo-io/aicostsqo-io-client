import { useState } from "react";
import { toast } from "react-toastify";
import ScanlineForm from "./Form";
import { createRpsByManual } from "@/api/rp";
import ScanlineExcel from "./Excel";
import NotYetImplemented from "@/components/common/NotYetImplemented";

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

const AddScanline = ({ method }: any) => {
  const [rp, setRp] = useState<any>(initialState);
  const [rps, setRps] = useState<any>([]);

  const handleAddRp = (rpLength: number) => {
    // const rpFields = Object.keys(rp);
    // for (const field of rpFields) {
    //   if (Array.isArray(rp[field])) continue;
    //   if (rp[field] === "") {
    //     console.log("field", field);
    //     toast.error("Please fill all the fields");
    //     return;
    //   }
    // }
    // setRps([...rps, rp]);
    // setRp(initialState);
    toast.success("scanlineeee");
  };

  const handleAddScanlines = async () => {
    try {
      // const res = await createRpsByManual(rps);
      // if (res.status === 200) {
      //   setRps([]);
      //   setRp(initialState);
      //   toast.success("RPs added successfully");
      // }
      toast.success("scanlineeeesss");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-container h-min p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">
        Scanline - Add {method === "manual" ? "Manually" : "from Excel"}
      </div>

      {method === "manual" ? (
        // <ScanlineForm rp={rp} setRp={setRp} handleAddRp={handleAddRp} />
        <NotYetImplemented fontSize={"text-xl"} />
      ) : (
        <ScanlineExcel />
      )}
    </div>
  );
};

export default AddScanline;
