import React from "react";

const barItem =
  "py-4 text-center shadow-md text-sm sm:text-md md:text-lg flex-1 cursor-pointer";
const barItemInActive = `${barItem} bg-gray-100 hover:bg-gray-200 `;
const barItemActive = `${barItem} shadow-xl bg-white hover:bg-white `;

interface GPRTopBarProps {
  gprStep: string;
  setGprStep: (step: string) => void;
}

const GPRTopBar = ({ gprStep, setGprStep }: GPRTopBarProps) => {
  return (
    <div className="flex flex-col modal-container py-6 px-6">
      <h1 className="modal-container-title">Add GPR</h1>
      <div className="mb-2">
        <div className="flex justify-between gap-2">
          <div
            className={`${
              gprStep === "info" ? barItemActive : barItemInActive
            }`}
            onClick={() => setGprStep("info")}
          >
            Info
          </div>
          <div
            className={`${
              gprStep === "profile" ? barItemActive : barItemInActive
            }`}
            onClick={() => setGprStep("profile")}
          >
            Profile
          </div>
          <div
            className={`${
              gprStep === "crack" ? barItemActive : barItemInActive
            }`}
            onClick={() => setGprStep("crack")}
          >
            Crack
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPRTopBar;
