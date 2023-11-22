import StepWatcher from "@/components/stepwatcher/StepWatcher";
import { Resistivity } from "@/types/models/resistivity.model";
import React, { useEffect, useState } from "react";
import SetResistivityData from "./SetResistivityData";
import { AddContours } from "./AddContours";

const stepTexts = ["Resistivity Info", "Add Contours"];

export default function AddResistiviteManually({ setInfo, setMainStep }: any) {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  const [resistivity, setResistivity] = useState<Resistivity>(
    {} as Resistivity
  );

  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);

  const handleComplete = (
    newResistivity: Resistivity,
    addNewResistivity: boolean
  ) => {
    setResistivity(newResistivity);
    setInfo((prev: any) => ({
      ...prev,
      resistivities: [...prev.resistivities, newResistivity],
    }));
    if (addNewResistivity) setStep(0);
    else setMainStep(4);
  };

  const handleResistivityDataProceed = (e: Resistivity) => {
    setResistivity(e);
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
        {step === 0 && (
          <SetResistivityData onProceed={handleResistivityDataProceed} />
        )}
        {step === 1 && (
          <AddContours resistivity={resistivity} onCompleted={handleComplete} />
        )}
      </div>
    </div>
  );
}
