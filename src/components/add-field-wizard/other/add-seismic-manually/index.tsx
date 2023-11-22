import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useEffect, useState } from "react";
import { AddProfiles } from "./AddProfiles";
import { AddDiscs } from "./AddDiscs";
import SetSeismicData from "./SetSeismicData";
import { Seismic } from "@/types/models/seismic";

const stepTexts = ["Seismic Info", "Add Profiles", "Add Cracks"];

export default function AddSeismicManually({ setInfo, setMainStep }: any) {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  const [seismic, setSeismic] = useState<Seismic>({} as Seismic);

  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);

  const handleComplete = (newSeismic: Seismic, addNewSeismic: boolean) => {
    setSeismic(newSeismic);
    setInfo((prev: any) => ({
      ...prev,
      seismics: [...prev.seismics, newSeismic],
    }));
    if (addNewSeismic) setStep(0);
    else setMainStep(4);
  };

  const handleProfileProceed = (e: Seismic) => {
    setSeismic(e);
    setStep(2);
  };

  const handleSeismicDataProceed = (e: Seismic) => {
    setSeismic(e);
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
        {step === 0 && <SetSeismicData onProceed={handleSeismicDataProceed} />}
        {step === 1 && (
          <AddProfiles seismic={seismic} onProceed={handleProfileProceed} />
        )}
        {step === 2 && (
          <AddDiscs seismic={seismic} onCompleted={handleComplete} />
        )}
      </div>
    </div>
  );
}
