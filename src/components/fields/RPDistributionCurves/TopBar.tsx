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
          ([distributionKey, distributionValue]) => (
            <div
              key={distributionKey}
              className={`${
                distributionValue ? barItemActive : barItemInActive
              }`}
              onClick={() => {
                setDistributions({
                  ...distributions,
                  [distributionKey]: !distributionValue,
                });
              }}
            >
              {distributionKey}
            </div>
          )
        )}
      </div>
      <div className="flex gap-5">
        {Object.entries(volumeTypes).map(([volumeKey, volumeValue]) => (
          <div
            key={volumeKey}
            className={`${volumeValue ? barItemActive : barItemInActive}`}
            onClick={() => {
              setVolumeTypes({
                ...volumeTypes,
                [volumeKey]: !volumeValue,
              });
            }}
          >
            {volumeKey}
          </div>
        ))}
      </div>
    </>
  );
};

export default TobBar;
