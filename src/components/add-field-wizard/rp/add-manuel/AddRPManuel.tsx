const inputContainerClasses = "flex justify-between w-1/3";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2";

const AddRPManuel = ({ next, info, setInfo }: any) => {
  const handleAddRP = () => {
    console.log(info);
    next();
  };

  return (
    <div className="modal-container h-full p-10 gap-3 flex flex-col justify-between">
      <div className="modal-container-title">Add RP Manually</div>
      <div className="flex flex-col gap-4">
        <div className={inputContainerClasses}>
          <label className={labelClasses}>Slope Angle</label>
          <input
            className={inputClasses}
            type="text"
            value={info?.rp?.slopeAngle}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, slopeAngle: e.target.value },
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
            value={info?.rp?.crepeAngle}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, crepeAngle: e.target.value },
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
            value={info?.rp?.volume}
            onChange={(e) =>
              setInfo({ ...info, rp: { ...info.rp, volume: e.target.value } })
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
            value={info?.rp?.sizeX}
            onChange={(e) =>
              setInfo({ ...info, rp: { ...info.rp, sizeX: e.target.value } })
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
            value={info?.rp?.sizeY}
            onChange={(e) =>
              setInfo({ ...info, rp: { ...info.rp, sizeY: e.target.value } })
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
            value={info?.rp?.sizeZ}
            onChange={(e) =>
              setInfo({ ...info, rp: { ...info.rp, sizeZ: e.target.value } })
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
            value={info?.rp?.positionX}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, positionX: e.target.value },
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
            value={info?.rp?.positionY}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, positionY: e.target.value },
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
            value={info?.rp?.positionZ}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, positionZ: e.target.value },
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
            value={info?.rp?.rotationX}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, rotationX: e.target.value },
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
            value={info?.rp?.rotationY}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, rotationY: e.target.value },
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
            value={info?.rp?.rotationZ}
            onChange={(e) =>
              setInfo({
                ...info,
                rp: { ...info.rp, rotationZ: e.target.value },
              })
            }
          />
        </div>
      </div>

      <div
        className="mt-10 w-full bg-black text-white text-center cursor-pointer py-2 px-5 text-lg"
        onClick={handleAddRP}
      >
        Add
      </div>
    </div>
  );
};

export default AddRPManuel;
