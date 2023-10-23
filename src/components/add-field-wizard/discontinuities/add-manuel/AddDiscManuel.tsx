import { useState } from "react";
import { toast } from "react-toastify";

const inputContainerClasses = "flex justify-between w-1/3";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2";

const initialState = {
  RPName: "",
  dip: "",
  dipDirect: "",
  pX: "",
  pY: "",
  pZ: "",
  nX: "",
  nY: "",
  nZ: "",
  type: "Deterministic"
};

const AddDiscManuel = ({ next, info, setInfo }: any) => {
  const [disc, setDisc] = useState<any>(initialState);

  // console.log(info);

  const handleAddDiscToInfo = () => {
    const rp = info?.rps?.find((rp: any) => rp.name === disc?.RPName);
    if (!rp) {
      toast.error("RP not found");
      return;
    }
    rp["discs"] = [...rp?.discs, disc];
    setDisc(initialState);
    toast.success("Disc added successfully");
  };

  const handleAddDiscs = () => {
    // console.log(info);
    next();
  };

  return (
    <div className="modal-container h-min p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">Add Disc Manually</div>
      <div className="flex flex-col gap-4">
        <div className={inputContainerClasses}>
          <label className={labelClasses}>Slope Angle</label>
          <select
            className={inputClasses}
            value={disc?.RPName}
            onChange={(e) =>
              setDisc({
                ...disc,
                RPName: e.target.value
              })
            }
          >
            <option value={""}>Select a RP</option>
            {info?.rps?.map((rp: any, index: number) => (
              <option key={index} value={rp.name}>
                {rp.name}
              </option>
            ))}
          </select>
        </div>
        <div className={inputContainerClasses}>
          <label className={labelClasses}>Slope</label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.dip}
            onChange={(e) =>
              setDisc({
                ...disc,
                dip: e.target.value
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            Slope Direction
          </label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.dipDirect}
            onChange={(e) =>
              setDisc({
                ...disc,
                dipDirect: e.target.value
              })
            }
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            pX
          </label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.pX}
            onChange={(e) => setDisc({ ...disc, pX: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            pY
          </label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.pY}
            onChange={(e) => setDisc({ ...disc, pY: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            pZ
          </label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.pZ}
            onChange={(e) => setDisc({ ...disc, pZ: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            nX
          </label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.nX}
            onChange={(e) => setDisc({ ...disc, nX: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            nY
          </label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.nY}
            onChange={(e) => setDisc({ ...disc, nY: e.target.value })}
          />
        </div>
        <div className={inputContainerClasses}>
          <label htmlFor="" className={labelClasses}>
            nZ
          </label>
          <input
            className={inputClasses}
            type="text"
            value={disc?.nZ}
            onChange={(e) => setDisc({ ...disc, nZ: e.target.value })}
          />
        </div>

        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={handleAddDiscToInfo}
        >
          Add
        </div>
      </div>

      <div
        className="mt-2 w-full bg-black text-white text-center cursor-pointer py-2 px-5 text-lg"
        onClick={handleAddDiscs}
      >
        Next
      </div>
    </div>
  );
};

export default AddDiscManuel;
