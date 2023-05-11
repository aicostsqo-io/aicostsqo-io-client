
import AddDisc from "@/components/add-field-wizard/AddDisc";
import AddOther from "@/components/add-field-wizard/AddOther";
import AddRP from "@/components/add-field-wizard/AddRP";
import AddSite from "@/components/add-field-wizard/AddSite";
import EndWizard from "@/components/add-field-wizard/EndWizard";
import StepWatcher from "@/components/stepwatcher/StepWatcher";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import WorldMap from "@/components/site/add-by-map";
import React, { useEffect, useState } from "react";

const stepTexts = ["Add Site/Field", "Add RP (Representative Prism)", "Add Disc (Discontinuities)", "Other Measurement Techniques (GPR etc.)", "End The Wizard"];

const AddField = () => {
  const [step, setStep] = useState(0);
  const [stepText, setStepText] = useState(stepTexts[step]);
  const [addSiteOption, setAddSiteOption] = useState(-1);
  useEffect(() => {
    setStepText(stepTexts[step])
  },[step])

  const next = () => {
    setStep((prev) => prev + 1)
    setAddSiteOption(-1);
  }

  return (
    <MainLayout>
    <ProjectLayout>
      <div className="flex flex-col modal-container py-3">
        <h1 className="modal-container-title"> {stepText} </h1>
        <StepWatcher
          step={step}
          stepCount={5}
          texts={stepTexts}
          setStep={setStep}
        />
        <div className="w-3/4 mx-auto">
          {step === 0 && (
            <AddSite  setAddSiteOption={setAddSiteOption} /* next={() => setStep(1)} info={info} setInfo={setInfo} */ />
          )}
          {step === 1 && (
            <AddRP /* next={() => setStep(1)} info={info} setInfo={setInfo} */ />
          )}
          {step === 2 && (
            <AddDisc /* next={() => setStep(1)} info={info} setInfo={setInfo} */ />
          )}
          {step === 3 && (
            <AddOther /* next={() => setStep(1)} info={info} setInfo={setInfo} */ />
          )}
          {step === 4 && (
            <EndWizard /* next={() => setStep(1)} info={info} setInfo={setInfo} */ />
          )}
        </div>
      </div>

      <div className="flex-1">
        {
          addSiteOption === 0 && (
            <WorldMap next={next}/>
          )
          
        }
      </div>

    </ProjectLayout>
    </MainLayout>
  );
};

export default AddField;
