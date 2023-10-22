import { createDisc, getDiscsByRpId } from "@/api/disc";
import { useSiteContext } from "@/contexts/Site";
import React, { use, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

interface Props {
  onClose: () => void;
  refetch: () => void;
}

const inputContainerClasses = "flex justify-between items-center w-1/2";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2 text-left";

const initialState = {
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

const AddDiscontinuity = ({ onClose, refetch }: Props) => {
  const [discontinuity, setDiscontinuity] = useState<any>(initialState);
  const { selectedRP } = useSiteContext();

  const handleAddDisc = async () => {
    //TODO: validation
    try {
      await createDisc({
        ...discontinuity,
        rpId: selectedRP?._id,
      });

      refetch();
      toast.success("Discontinuity added successfully");
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 w-full flex justify-center items-center overflow-scroll z-[100] tracking-wider">
      <div className="bg-white text-black radius-lg w-1/2 flex flex-col">
        <div className="modal-header py-3 px-7 flex justify-between border-b border-slate-600 border-opacity-50">
          <span className="modal-header-title font-bold">
            Add Discontinuity
          </span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <div className="modal-body px-7 py-5">
          <div className="flex flex-col gap-4">
            <div className={inputContainerClasses}>
              <label className={labelClasses}>Dip</label>
              <input
                className={inputClasses}
                type="text"
                value={discontinuity?.dip}
                onChange={(e) =>
                  setDiscontinuity({
                    ...discontinuity,
                    dip: e.target.value,
                  })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                Dip Direction
              </label>
              <input
                className={inputClasses}
                type="text"
                value={discontinuity?.dipDirect}
                onChange={(e) =>
                  setDiscontinuity({
                    ...discontinuity,
                    dipDirect: e.target.value,
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
                value={discontinuity?.pX}
                onChange={(e) =>
                  setDiscontinuity({ ...discontinuity, pX: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                pY
              </label>
              <input
                className={inputClasses}
                type="text"
                value={discontinuity?.pY}
                onChange={(e) =>
                  setDiscontinuity({ ...discontinuity, pY: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                pZ
              </label>
              <input
                className={inputClasses}
                type="text"
                value={discontinuity?.pZ}
                onChange={(e) =>
                  setDiscontinuity({ ...discontinuity, pZ: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                nX
              </label>
              <input
                className={inputClasses}
                type="text"
                value={discontinuity?.nX}
                onChange={(e) =>
                  setDiscontinuity({ ...discontinuity, nX: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                nY
              </label>
              <input
                className={inputClasses}
                type="text"
                value={discontinuity?.nY}
                onChange={(e) =>
                  setDiscontinuity({ ...discontinuity, nY: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                nZ
              </label>
              <input
                className={inputClasses}
                type="text"
                value={discontinuity?.nZ}
                onChange={(e) =>
                  setDiscontinuity({ ...discontinuity, nZ: e.target.value })
                }
              />
            </div>

            <div
              className="bg-black text-white justify-between w-full mt-3 py-2 rounded text-center cursor-pointer"
              onClick={handleAddDisc}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDiscontinuity;
