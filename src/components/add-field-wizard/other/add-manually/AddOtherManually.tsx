import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useEffect, useState } from "react";
import { AddProfiles } from "./AddProfiles";
import { AddCracks } from "./AddCracks";

const stepTexts = ["Add Profiles", "Add Cracks"];

export default function AddOtherManually({ info, setInfo, next }: any) {
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
        {step === 0 && <AddProfiles setInfo={setInfo} />}
        {step === 1 && <AddCracks setInfo={setInfo} />}
      </div>
    </div>
  );
}
