import { createDisc, getDiscsByRpId, updateDisc } from "@/api/disc";
import { useSiteContext } from "@/contexts/Site";
import React, { use, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

interface Props {
  discontinuity: any;
  onClose: () => void;
  refetch: () => void;
}

const inputContainerClasses = "flex justify-between items-center w-1/2";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2 text-left";

const UpdateDiscontinuity = ({ discontinuity, onClose, refetch }: Props) => {
  const [discontinuityToUpdate, setDiscontinuityToUpdate] = useState<any>(null);

  useEffect(() => {
    setDiscontinuityToUpdate(discontinuity);
  }, [discontinuity]);

  const handleUpdateDisc = async () => {
    try {
      await updateDisc(discontinuity?._id, discontinuityToUpdate);

      refetch();
      toast.success("Discontinuity updated successfully");
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
            Update Discontinuity
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
                value={discontinuityToUpdate?.dip}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
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
                value={discontinuityToUpdate?.dipDirect}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
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
                value={discontinuityToUpdate?.pX}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
                    pX: e.target.value,
                  })
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
                value={discontinuityToUpdate?.pY}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
                    pY: e.target.value,
                  })
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
                value={discontinuityToUpdate?.pZ}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
                    pZ: e.target.value,
                  })
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
                value={discontinuityToUpdate?.nX}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
                    nX: e.target.value,
                  })
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
                value={discontinuityToUpdate?.nY}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
                    nY: e.target.value,
                  })
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
                value={discontinuityToUpdate?.nZ}
                onChange={(e) =>
                  setDiscontinuityToUpdate({
                    ...discontinuityToUpdate,
                    nZ: e.target.value,
                  })
                }
              />
            </div>

            <div
              className="bg-black text-white justify-between w-full mt-3 py-2 rounded text-center cursor-pointer"
              onClick={handleUpdateDisc}
            >
              Update
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDiscontinuity;
