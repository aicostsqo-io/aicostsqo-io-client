import React from "react";

const barItem =
  "py-3 text-center shadow-md text-base flex-1 cursor-pointer uppercase flex items-center justify-center border-2";
const barItemInActive = `${barItem} bg-white  hover:bg-slate-300 font-medium border-white hover:border-slate-300`;
const barItemActive = `${barItem}  bg-gray-200  hover:bg-slate-200 font-bold underline  border-black`;

interface TobBarProps {
  distributions: any;
  volumeTypes: any;
  setDistributions: any;
  setVolumeTypes: any;
}
const TobBar = ({
  distributions,
  setDistributions,
  volumeTypes,
  setVolumeTypes,
}: TobBarProps) => {
  return (
    <>
      <div className="flex gap-5">
        {Object.entries(distributions).map(
          ([distributionKey, distributionObject]: any) => (
            <div
              key={distributionKey}
              className={`${
                distributionObject.value ? barItemActive : barItemInActive
              }`}
              onClick={() => {
                setDistributions((prevDistributions: any) => ({
                  ...prevDistributions,
                  [distributionKey]: {
                    ...prevDistributions[distributionKey],
                    value: !distributionObject.value,
                  },
                }));
              }}
            >
              {distributionObject.label}
            </div>
          )
        )}
      </div>

      <div className="flex gap-5">
        {Object.entries(volumeTypes).map(([volumeKey, volumeObject]: any) => (
          <div
            key={volumeKey}
            className={`${
              volumeObject.value ? barItemActive : barItemInActive
            }`}
            onClick={() => {
              setVolumeTypes((prevVolumeTypes: any) => ({
                ...prevVolumeTypes,
                [volumeKey]: {
                  ...prevVolumeTypes[volumeKey],
                  value: !volumeObject.value,
                },
              }));
            }}
          >
            {volumeObject.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default TobBar;
