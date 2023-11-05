import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useEffect, useState } from "react";
import { AddProfiles } from "./AddProfiles";
import { AddCracks } from "./AddCracks";
import SetGPRData from "./SetGPRData";

const stepTexts = ["GPR Info", "Add Profiles", "Add Cracks"];

export default function AddGPRManually({ setInfo, info }: any) {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);
  return (
    <div className="flex flex-col modal-container py-6">
      <h1 className="modal-container-title"> {stepText} </h1>
      <StepWatcher
        step={step}
        stepCount={5}
        texts={stepTexts}
        setStep={setStep}
      />
      <div className="w-3/4 mx-auto">
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log(info);
          }}
        >
          Console Log
        </button>
        {step === 0 && <SetGPRData setInfo={setInfo} setStep={setStep} />}
        {step === 1 && <AddProfiles setInfo={setInfo} setStep={setStep} />}
        {step === 2 && <AddCracks setInfo={setInfo} setStep={setStep} />}
      </div>
    </div>
  );
}
