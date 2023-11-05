import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useEffect, useState } from "react";
import { AddProfiles } from "./AddProfiles";
import { AddCracks } from "./AddCracks";
import SetGPRData from "./SetGPRData";

const stepTexts = ["GPR Info", "Add Profiles", "Add Cracks"];

export default function AddGPRManually({ setInfo, setMainStep }: any) {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  const [gpr, setGpr] = useState<any>();

  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);

  const handleComplete = (newGpr: boolean) => {
    console.log("gpr: ", gpr);
    setInfo((prev: any) => ({
      ...prev,
      gprs: [...prev.gprs, gpr],
    }));

    if (!newGpr) setMainStep(4);
  };

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
        {step === 0 && (
          <SetGPRData
            setStep={setStep}
            onProceed={(e: any) => {
              setGpr(e);
            }}
          />
        )}
        {step === 1 && (
          <AddProfiles setStep={setStep} gpr={gpr} setGpr={setGpr} />
        )}
        {step === 2 && (
          <AddCracks
            setStep={setStep}
            gpr={gpr}
            setGpr={setGpr}
            onCompleted={handleComplete}
          />
        )}
      </div>
    </div>
  );
}
