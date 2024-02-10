import { getRpsBySiteBoundId } from "@/api/rp";
import { getSiteBounds } from "@/api/site";
import React, { useEffect, useState } from "react";

const inputContainerClasses = "flex justify-between w-1/3";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2";

interface IDiscFormProps {
  disc: any;
  setDisc: any;
  handleAddDisc: any;
}

const DiscForm = ({ disc, setDisc, handleAddDisc }: IDiscFormProps) => {
  const [siteBounds, setSiteBounds] = useState<any>([]);
  const [rps, setRps] = useState<any>([]);
  useEffect(() => {
    getSiteBounds().then((res) => {
      setSiteBounds(res.data.siteBounds);
    });

    if (disc.siteBound) {
      getRpsBySiteBoundId(disc.siteBound).then((res) => {
        setRps(res.data.rps);
      });
    }
  }, [disc.siteBound]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className={inputContainerClasses}>
          <label className={labelClasses}>Site Bound</label>
          <select
            className={inputClasses}
            value={disc?.siteBound}
            onChange={(e) =>
              setDisc({
                ...disc,
                siteBound: e.target.value,
              })
            }
          >
            <option value={""}>Select Site Bound</option>
            {siteBounds?.map((siteBound: any, index: number) => (
              <option key={index} value={siteBound._id}>
                {siteBound?.site?.name}
              </option>
            ))}
          </select>
        </div>
        <div className={inputContainerClasses}>
          <label className={labelClasses}>Representing Prisma</label>
          <select
            className={inputClasses}
            value={disc?.rpId}
            onChange={(e) =>
              setDisc({
                ...disc,
                rpId: e.target.value,
              })
            }
          >
            <option value={""}>Select a RP</option>
            {rps?.map((rp: any, index: number) => (
              <option key={index} value={rp._id}>
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
                dip: e.target.value,
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
      </div>
      <div
        className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
        onClick={handleAddDisc}
      >
        Add Disc to Array
      </div>
    </div>
  );
};

export default DiscForm;
