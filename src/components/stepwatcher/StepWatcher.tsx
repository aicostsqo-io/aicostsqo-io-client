import React from "react";

interface StepWatcherProps {}

function StepWatcher({ step, stepCount, texts, setStep }: any) {
  if (stepCount === 1) return <></>;
  return (
    <div className="bg-white h-28 flex flex-col gap-3 justify-center items-center rounded-2xl relative">
      <div className="h-2 w-3/4 bg-gray-200 flex items-center justify-between relative">
        {[...Array(stepCount)].map((_, index) => (
          <div
            className={`${
              step >= index
                ? "bg-slate-800"
                : "bg-white border-2 border-gray-500"
            } h-6 w-6 rounded-full cursor-pointer`}
            key={index}
            onClick={() => setStep(index)}
          />
        ))}
      </div>
      <div className=" justify-between items-center w-3/4 flex ">
        {texts.map((text: string, index: number) => (
          <span key={index} className="text-base">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default StepWatcher;
