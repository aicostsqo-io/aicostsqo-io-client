import { useState } from "react";

const inputContainerClasses = "flex justify-between items-center";
const inputClasses = "border border-black w-1/2 py-1 px-2 outline-none";
const labelClasses = "w-1/2";

const initialState = {
  rectangleNumber: "",
  shape: "",
  longitudinalProfileNumber: "",
  traversalProfileNumber: "",
  dimension: "",
  antenna: "",
  longitudinalProfilesDirectory: "",
  longitudinalProfilesMaxDepth: "",
  longitudinalProfilesMaxDistance: "",
  traversalProfilesDirectory: "",
  traversalProfilesMaxDepth: "",
  traversalProfilesMaxDistance: "",
  mapReferenceSystemForStartOfLongitudinalProfiles: "",
};

const shapeTypes = [
  {
    name: "Circular",
  },
  {
    name: "Triangular",
  },
  {
    name: "Quadratic",
  },
];

const dimensions = [
  {
    name: "1D",
  },
  {
    name: "2D",
  },
  {
    name: "3D",
  },
];

const referenceSystems = [
  {
    name: "GPS",
  },
  {
    name: "WGS84",
  },
  {
    name: "ITRF96",
  },
];

export const AddProfiles = ({ info, setInfo, next }: any) => {
  const [gpr, setGpr] = useState<any>(initialState);

  return (
    <>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-4">
          <div className={inputContainerClasses}>
            <label className={labelClasses}>Rectangle Number</label>
            <input
              className={inputClasses}
              type="number"
              min={0}
              value={gpr?.rectangleNumber}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  rectangleNumber: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Shape</label>
            <select
              className={inputClasses}
              value={gpr?.shape}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  shape: e.target.value,
                })
              }
            >
              <option value={""}>Select Shape</option>
              {shapeTypes.map((rp: any, index: number) => (
                <option key={index} value={rp.name}>
                  {rp.name}
                </option>
              ))}
            </select>
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Longitudinal Profile Number</label>
            <input
              className={inputClasses}
              type="number"
              min={0}
              value={gpr?.longitudinalProfileNumber}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  longitudinalProfileNumber: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Traversal Profile Number</label>
            <input
              className={inputClasses}
              type="number"
              min={0}
              value={gpr?.traversalProfileNumber}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  traversalProfileNumber: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Dimension</label>
            <select
              className={inputClasses}
              value={gpr?.dimension}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  dimension: e.target.value,
                })
              }
            >
              <option value={""}>Select Dimension</option>
              {dimensions.map((rp: any, index: number) => (
                <option key={index} value={rp.name}>
                  {rp.name}
                </option>
              ))}
            </select>
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Antenna</label>
            <input
              className={inputClasses}
              type="text"
              value={gpr?.antenna}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  antenna: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>
              Longitudinal Profiles Directory
            </label>
            <input
              className={inputClasses}
              type="text"
              value={gpr?.longitudinalProfilesDirectory}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  longitudinalProfilesDirectory: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>
              Longitudinal Profiles Max Depth (m)
            </label>
            <input
              className={inputClasses}
              type="number"
              value={gpr?.longitudinalProfilesMaxDepth}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  longitudinalProfilesMaxDepth: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>
              Longitudinal Profiles Max Distance (m)
            </label>
            <input
              className={inputClasses}
              type="number"
              value={gpr?.longitudinalProfilesMaxDistance}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  longitudinalProfilesMaxDistance: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className={inputContainerClasses}>
            <label className={labelClasses}>Traversal Profiles Directory</label>
            <input
              className={inputClasses}
              type="text"
              value={gpr?.traversalProfilesDirectory}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  traversalProfilesDirectory: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>
              Traversal Profiles Max Depth (m)
            </label>
            <input
              className={inputClasses}
              type="number"
              value={gpr?.traversalProfilesMaxDepth}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  traversalProfilesMaxDepth: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>
              Traversal Profiles Max Distance (m)
            </label>
            <input
              className={inputClasses}
              type="number"
              value={gpr?.traversalProfilesMaxDistance}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  traversalProfilesMaxDistance: e.target.value,
                })
              }
            />
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Map Reference System For Start of Longitudinal Profiles</label>
            <select
              className={inputClasses}
              value={gpr?.mapReferenceSystemForStartOfLongitudinalProfiles}
              onChange={(e) =>
                setGpr({
                  ...gpr,
                  mapReferenceSystemForStartOfLongitudinalProfiles:
                    e.target.value,
                })
              }
            >
              <option value={""}>Select Reference System</option>
              {referenceSystems.map((rp: any, index: number) => (
                <option key={index} value={rp.name}>
                  {rp.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 pt-4">
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={() => {
            console.log("kaydetme işlemi yapılacak");
          }}
        >
          Save
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={() => {
            console.log("kaydetme işlemi yapılacak ve field'lar sıfırlanacak");
          }}
        >
          Save & Add New
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={() => {
            console.log(
              "kaydetme işlemi yapılacak ve bir sonraki step'e geçilecek (add cracks)"
            );
          }}
        >
          Save & Proceed
        </div>
        <div
          className="bg-black text-white justify-between w-1/3 py-2 rounded text-center cursor-pointer"
          onClick={() => {
            console.log("field'lar sıfırlanabilir");
          }}
        >
          Cancel
        </div>
      </div>
    </>
  );
};
