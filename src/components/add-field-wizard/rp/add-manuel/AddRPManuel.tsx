import { useState } from "react";
import { toast } from "react-toastify";

const inputContainerClasses = "flex justify-between w-1/3";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2";

const initialState = {
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
  discs: [],
};

const AddRPManuel = ({ next, info, setInfo }: any) => {
  const [rp, setRp] = useState<any>(initialState);

  const handleAddRPToInfo = () => {
    // check if rp fields are empty
    const rpFields = Object.keys(rp);
    for (const field of rpFields) {
      if (Array.isArray(rp[field])) continue;
      if (rp[field] === "") {
        toast.error("Please fill all the fields");
        return;
      }
    }

    setInfo({
      ...info,
      rps: [
        ...info.rps,
        { ...rp, name: `RP ${String(info?.rps.length + 1).padStart(3, "0")}` },
      ],
    });
    setRp(initialState);
    toast.success("RP added successfully");
  };

  const handleAddRps = () => {
    // console.log(info);
    next();
  };

  return (
    <div className="modal-container h-min p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">Add RP Manually</div>
      <div className="flex flex-col gap-4">
        <div className={inputContainerClasses}>
          <label className={labelClasses}>Slope Angle</label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.slopeAngle}
            onChange={(e) =>
              setRp({
                ...rp,
                slopeAngle: e.target.value,
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Crepe Angle
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.crepeAngle}
            onChange={(e) =>
              setRp({
                ...rp,
                crepeAngle: e.target.value,
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Volume
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.volume}
            onChange={(e) => setRp({ ...rp, volume: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Size X
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.sizeX}
            onChange={(e) => setRp({ ...rp, sizeX: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Size Y
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.sizeY}
            onChange={(e) => setRp({ ...rp, sizeY: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Size Z
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.sizeZ}
            onChange={(e) => setRp({ ...rp, sizeZ: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Position X
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.positionX}
            onChange={(e) =>
              setRp({
                ...rp,
                positionX: e.target.value,
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Position Y
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.positionY}
            onChange={(e) =>
              setRp({
                ...rp,
                positionY: e.target.value,
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Position Z
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.positionZ}
            onChange={(e) =>
              setRp({
                ...rp,
                positionZ: e.target.value,
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Rotation X
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.rotationX}
            onChange={(e) =>
              setRp({
                ...rp,
                rotationX: e.target.value,
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Rotation Y
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.rotationY}
            onChange={(e) =>
              setRp({
                ...rp,
                rotationY: e.target.value,
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Rotation Z
          </label>
          <input
            className={inputClasses}
            type="text"
            value={rp?.rotationZ}
            onChange={(e) =>
              setRp({
                ...rp,
                rotationZ: e.target.value,
              })
            }
          />
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleAddRPToInfo}
        >
          Add
        </div>
      </div>

      <div
        className="mt-2 w-full bg-black text-white text-center cursor-pointer py-2 px-5 text-lg"
        onClick={handleAddRps}
      >
        Next
      </div>
    </div>
  );
};

export default AddRPManuel;
