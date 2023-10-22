import { createRp, getRpsBySiteBoundId } from "@/api/rp";
import { useSiteContext } from "@/contexts/Site";
import { useRouter } from "next/router";
import React, { use, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

interface Props {
  onClose: () => void;
}

const inputContainerClasses = "flex justify-between items-center w-1/2";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2 text-left";

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
};

const AddRP = ({ onClose }: Props) => {
  const [rp, setRp] = useState<any>(initialState);
  const { selectedSite, setSelectedRPs } = useSiteContext();

  const handleAddRP = async () => {
    //TODO: validation
    try {
      await createRp({
        ...rp,
        siteBound: selectedSite?.siteBound?._id,
        name: `RP ${String(selectedSite?.rps.length + 1).padStart(3, "0")}`,
      });

      const rpsGetResponse = await getRpsBySiteBoundId(
        selectedSite?.siteBound?._id
      );
      setSelectedRPs(rpsGetResponse?.data?.rps);
      toast.success("RP added successfully");
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
            Add Representing Prism (RP)
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
              className="bg-black text-white justify-between mt-4 py-2 rounded text-center cursor-pointer"
              onClick={handleAddRP}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRP;
