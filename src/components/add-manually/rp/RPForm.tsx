import { getRpsBySiteBoundId } from "@/api/rp";
import { getSiteBounds } from "@/api/site";
import React, { useEffect, useState } from "react";

const inputContainerClasses = "flex justify-between w-1/3";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2";

interface IRPFormProps {
  rp: any;
  setRp: any;
  handleAddRp: any;
}

const RPForm = ({ rp, setRp, handleAddRp }: IRPFormProps) => {
  const [siteBounds, setSiteBounds] = useState<any>([]);
  const [rps, setRps] = useState<any>([]);
  useEffect(() => {
    getSiteBounds().then((res) => {
      setSiteBounds(res.data.siteBounds);
    });

    if (rp.siteBound) {
      getRpsBySiteBoundId(rp.siteBound).then((res) => {
        setRps(res.data.rps);
      });
    }
  }, [rp.siteBound]);
  return (
    <div className="flex flex-col gap-4">
      <div className={inputContainerClasses}>
        <label className={labelClasses}>Site Bound</label>
        <select
          className={inputClasses}
          value={rp?.siteBound}
          onChange={(e) =>
            setRp({
              ...rp,
              siteBound: e.target.value,
            })
          }
        >
          <option value="" disabled>
            Select Site Bound
          </option>
          {siteBounds.map((siteBound: any) => (
            <option key={siteBound._id} value={siteBound._id}>
              {siteBound?.site?.name}
            </option>
          ))}
        </select>
      </div>
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
        onClick={() => handleAddRp(rps.length)}
      >
        Add RP to Array
      </div>
    </div>
  );
};

export default RPForm;
