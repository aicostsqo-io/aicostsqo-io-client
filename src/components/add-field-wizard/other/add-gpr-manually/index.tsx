import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useEffect, useState } from "react";
import { AddProfiles } from "./AddProfiles";
import { AddCracks } from "./AddCracks";
import SetGPRData from "./SetGPRData";
import { Gpr } from "@/types/models/gpr";

const stepTexts = ["GPR Info", "Add Profiles", "Add Cracks"];

export default function AddGPRManually({ setInfo, setMainStep }: any) {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  const [gpr, setGpr] = useState<Gpr>({} as Gpr);

  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);

  const handleComplete = (newGpr: Gpr, addNewGpr: boolean) => {
    setGpr(newGpr);
    setInfo((prev: any) => ({
      ...prev,
      gprs: [...prev.gprs, newGpr],
    }));
    if (addNewGpr) setStep(0);
    else setMainStep(4);
  };

  const handleProfileProceed = (e: Gpr) => {
    setGpr(e);
    setStep(2);
  };

  const handleGPRDataProceed = (e: Gpr) => {
    setGpr(e);
    setStep(1);
  };

  return (
    <div className="flex flex-col modal-container py-6">
      <h1 className="modal-container-title"> {stepText} </h1>
      <StepWatcher
        step={step}
        stepCount={stepTexts.length}
        texts={stepTexts}
        setStep={setStep}
      />
      <div className="w-3/4 mx-auto">
        {step === 0 && <SetGPRData onProceed={handleGPRDataProceed} />}
        {step === 1 && (
          <AddProfiles gpr={gpr} onProceed={handleProfileProceed} />
        )}
        {step === 2 && <AddCracks gpr={gpr} onCompleted={handleComplete} />}
      </div>
    </div>
  );
}
