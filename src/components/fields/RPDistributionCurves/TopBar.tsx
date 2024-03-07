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
  showAnalysis: any;
  setShowAnalysis: any;
}
const TobBar = ({
  distributions,
  setDistributions,
  volumeTypes,
  setVolumeTypes,
  showAnalysis,
  setShowAnalysis,
}: TobBarProps) => {
  const changeVolumeType = (volumeKey: string) => {
    // just toggle sended volume type, make false the others
    setVolumeTypes((prevVolumeTypes: any) => {
      const newVolumeTypes = { ...prevVolumeTypes };
      Object.keys(newVolumeTypes).forEach((key) => {
        newVolumeTypes[key].value = key === volumeKey;
      });
      return newVolumeTypes;
    });
  };
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
            onClick={() => changeVolumeType(volumeKey)}
          >
            {volumeObject.label}
          </div>
        ))}
      </div>
      <div className="">
        <div
          className={`${showAnalysis ? barItemActive : barItemInActive}`}
          onClick={() => setShowAnalysis(!showAnalysis)}
        >
          Show Analysis
        </div>
      </div>
    </>
  );
};

export default TobBar;
