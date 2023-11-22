import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useEffect, useState } from "react";
import SetTeleviewerData from "./SetTeleviewerData";
import { Televiewer } from "@/types/models/televiewer";
import { AddDiscs } from "./AddDiscs";

const stepTexts = ["Televiewer Info", "Add Discs"];

export default function AddTeleviewerManually({ setInfo, setMainStep }: any) {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  const [televiewer, setTeleviewer] = useState<Televiewer>({} as Televiewer);

  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);

  const handleComplete = (
    newTeleviewer: Televiewer,
    addNewTeleviewer: boolean
  ) => {
    setTeleviewer(newTeleviewer);
    setInfo((prev: any) => ({
      ...prev,
      televiewers: [...prev.televiewers, newTeleviewer],
    }));
    if (addNewTeleviewer) setStep(0);
    else setMainStep(4);
  };

  const handleTeleviewerDataProceed = (e: Televiewer) => {
    setTeleviewer(e);
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
          <SetTeleviewerData onProceed={handleTeleviewerDataProceed} />
        )}
        {step === 1 && (
          <AddDiscs televiewer={televiewer} onCompleted={handleComplete} />
        )}
      </div>
    </div>
  );
}
