import { createRp, getRpsBySiteBoundId, updateRp } from "@/api/rp";
import { useSiteContext } from "@/contexts/Site";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

interface Props {
  onClose: () => void;
  rp: any;
}

const inputContainerClasses = "flex justify-between items-center w-1/2";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2 text-left";

const UpdateRP = ({ rp, onClose }: Props) => {
  const [rpToUpdate, setRpToUpdate] = useState<any>(null);
  const { selectedSite, setSelectedRPs, mutate } = useSiteContext();
  useEffect(() => {
    setRpToUpdate(rp);
  }, [rp]);

  const handleUpdateRP = async () => {
    try {
      await updateRp(rp._id, rpToUpdate);

      const rpsGetResponse = await getRpsBySiteBoundId(
        selectedSite?.siteBound?._id
      );
      setSelectedRPs(rpsGetResponse?.data?.rps);
      mutate();
      toast.success("RP updated successfully");
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
            Update Representing Prism (RP)
          </span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <div className="modal-body px-7 py-5">
          <div className="flex flex-col gap-4">
            <div className={inputContainerClasses}>
              <label className={labelClasses}>Slope Angle</label>
              <input
                className={inputClasses}
                type="text"
                value={rpToUpdate?.slopeAngle}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
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
                value={rpToUpdate?.crepeAngle}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
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
                value={rpToUpdate?.volume}
                onChange={(e) =>
                  setRpToUpdate({ ...rpToUpdate, volume: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                Size X
              </label>
              <input
                className={inputClasses}
                type="text"
                value={rpToUpdate?.sizeX}
                onChange={(e) =>
                  setRpToUpdate({ ...rpToUpdate, sizeX: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                Size Y
              </label>
              <input
                className={inputClasses}
                type="text"
                value={rpToUpdate?.sizeY}
                onChange={(e) =>
                  setRpToUpdate({ ...rpToUpdate, sizeY: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                Size Z
              </label>
              <input
                className={inputClasses}
                type="text"
                value={rpToUpdate?.sizeZ}
                onChange={(e) =>
                  setRpToUpdate({ ...rpToUpdate, sizeZ: e.target.value })
                }
              />
            </div>
            <div className={inputContainerClasses}>
              <label htmlFor="" className={labelClasses}>
                Position X
              </label>
              <input
                className={inputClasses}
                type="text"
                value={rpToUpdate?.positionX}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
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
                value={rpToUpdate?.positionY}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
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
                value={rpToUpdate?.positionZ}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
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
                value={rpToUpdate?.rotationX}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
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
                value={rpToUpdate?.rotationY}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
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
                value={rpToUpdate?.rotationZ}
                onChange={(e) =>
                  setRpToUpdate({
                    ...rpToUpdate,
                    rotationZ: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="bg-black text-white justify-between mt-4 py-2 rounded text-center cursor-pointer"
              onClick={handleUpdateRP}
            >
              Update
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRP;
