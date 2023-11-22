import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useEffect, useState } from "react";
import SetMagnetometricData from "./SetMagnetometricData";
import { Magnetometric } from "@/types/models/magnetometric";
import { AddDiscs } from "./AddDiscs";

const stepTexts = ["Magnetometric Info", "Add Discs"];

export default function AddMagnetometricManually({
  setInfo,
  setMainStep,
}: any) {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  const [magnetometric, setMagnetometric] = useState<Magnetometric>(
    {} as Magnetometric
  );

  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);

  const handleComplete = (
    newMagnetometric: Magnetometric,
    addNewMagnetometric: boolean
  ) => {
    setMagnetometric(newMagnetometric);
    setInfo((prev: any) => ({
      ...prev,
      magnetometrics: [...prev.magnetometrics, newMagnetometric],
    }));
    if (addNewMagnetometric) setStep(0);
    else setMainStep(4);
  };

  const handleMagnetometricDataProceed = (e: Magnetometric) => {
    setMagnetometric(e);
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
          <SetMagnetometricData onProceed={handleMagnetometricDataProceed} />
        )}
        {step === 1 && (
          <AddDiscs
            magnetometric={magnetometric}
            onCompleted={handleComplete}
          />
        )}
      </div>
    </div>
  );
}
