import FirstStep from "@/components/add-field-wizard/FirstStep";
import StepWatcher from "@/components/stepwatcher/StepWatcher";
import React, { useState } from "react";

const AddField = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Add Field</h1>
      <StepWatcher
        step={step}
        stepCount={3}
        texts={["Anket Ekle", "Soru Ekle", "Onayla"]}
        setStep={setStep}
      />
      {/* {step === 0 && (
        <FirstStep next={() => setStep(1)} info={info} setInfo={setInfo} />
      )}
      {step === 1 && (
        <SecondStep
          next={() => setStep(2)}
          prev={() => setStep(0)}
          question={question}
          setQuestion={setQuestion}
          questions={questions}
          setQuestions={setQuestions}
          initialQuestion={initialQuestion}
          step={step}
        />
      )}
      {step === 2 && (
        <LastStep
          prev={() => setStep(1)}
          info={info}
          questions={questions}
          add_survey={_add_survey}
        />
      )} */}
    </div>
  );
};

export default AddField;
