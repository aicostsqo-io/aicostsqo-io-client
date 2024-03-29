import { createSite } from "@/api/site";
import EndWizard from "@/components/add-field-wizard/EndWizard";
import AddDisc from "@/components/add-field-wizard/discontinuities/AddDisc";
import AddDiscManuel from "@/components/add-field-wizard/discontinuities/add-manuel/AddDiscManuel";
import AddOther from "@/components/add-field-wizard/other/AddOther";
import AddGPRManually from "@/components/add-field-wizard/other/add-gpr-manually";
import AddMagnetometricManually from "@/components/add-field-wizard/other/add-magnetometric-manually";
import AddResistiviteManually from "@/components/add-field-wizard/other/add-resistivite-manually";
import AddSeismicManually from "@/components/add-field-wizard/other/add-seismic-manually";
import AddTeleviewerManually from "@/components/add-field-wizard/other/add-televiewer-manually";
import AddRP from "@/components/add-field-wizard/rp/AddRP";
import AddRPManuel from "@/components/add-field-wizard/rp/add-manuel/AddRPManuel";
import AddSite from "@/components/add-field-wizard/site/AddSite";
import WorldMap from "@/components/add-field-wizard/site/add-by-map";
import StepWatcher from "@/components/stepwatcher/StepWatcher";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const stepTexts = [
  "Add Site/Field",
  "Add RP (Representative Prism)",
  "Add Disc (Discontinuities)",
  "Other Measurement Techniques (GPR etc.)",
  "End The Wizard",
];

const initialInfo = {
  site: {
    //_id: "",
    customerId: "",
    name: "",
    generateVirtual1DExtendedRPs: false,
    calculateMaximumCuboids: false,
    calculatePolyhedrons: false,
    generateDiscontinuityPlanes: false,
  },
  siteBound: {
    //_id: "",
    mapReferenceSystem: "", // select => enum: ["WGS-84", "ECET"]
    vertexes: [],
    positionN: "",
    positionE: "",
    positionLong: "",
    positionLat: "",
    heading: "",
  },
  rps: [
    /*
    {
    // _id: "",
    // siteBoundId: "",
   
    slopeAngle: "",
    crepeAngle: "",
    volume: "",
    sizeX: "",
    sizeY: "",
    sizeZ: "",
    positionX: "",
    positionY: "",
    positionZ: "",
    rotationX: "",
    rotationY: "",
    rotationZ: "", 
    
  }
*/
  ],
  discs: [],
  gprs: [],
  magnetometrics: [],
  seismics: [],
  televiewers: [],
  resistivities: [],
};

const AddField = () => {
  const [info, setInfo] = useState<any>(initialInfo);
  const [step, setStep] = useState(0);

  const [stepText, setStepText] = useState(stepTexts[step]);

  const [addSiteOption, setAddSiteOption] = useState(-1);
  const [addRpOption, setAddRpOption] = useState(0);
  const [addDiscOption, setAddDiscOption] = useState(0);
  const [discType, setDiscType] = useState(-1);
  const [otherType, setOtherType] = useState(0);
  const [addOtherOption, setAddOtherOption] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setStepText(stepTexts[step]);
  }, [step]);

  const next = () => {
    setStep((prev) => prev + 1);
    setAddSiteOption(-1);
  };

  const end = () => {
    setStep(-1);
    setAddSiteOption(-1);
  };

  const save = () => {
    createSite(info)
      .then(() => {
        toast.success("Site created successfully");
        router.push("/project");
      })
      .catch((err) => {});
  };
  return (
    <MainLayout>
      <ProjectLayout>
        <div className="flex flex-col modal-container py-6">
          <h1 className="modal-container-title"> {stepText} </h1>
          <StepWatcher
            step={step}
            stepCount={5}
            texts={stepTexts}
            setStep={setStep}
          />
          <div className="w-3/4 mx-auto">
            {step === 0 && <AddSite setAddSiteOption={setAddSiteOption} />}
            {step === 1 && (
              <AddRP setAddRpOption={setAddRpOption} next={next} />
            )}
            {step === 2 && (
              <AddDisc
                setAddDiscOption={setAddDiscOption}
                discType={discType}
                setDiscType={setDiscType}
                next={next}
              />
            )}
            {step === 3 && (
              <AddOther
                setAddOtherOption={setAddOtherOption}
                next={next}
                setOtherType={setOtherType}
                otherType={otherType}
              />
            )}
            {step === 4 && (
              <EndWizard save={save} end={end} info={info} setInfo={setInfo} />
            )}
          </div>
        </div>

        <div>
          {step === 0 && addSiteOption === 0 && (
            <WorldMap info={info} setInfo={setInfo} next={next} />
          )}
          {step === 1 && addRpOption === 0 && (
            <AddRPManuel info={info} setInfo={setInfo} next={next} />
          )}
          {step === 2 && addDiscOption === 0 && discType === 0 && (
            <AddDiscManuel info={info} setInfo={setInfo} next={next} />
          )}
          {step === 3 && addOtherOption === 0 && (
            <OtherComponent
              otherType={otherType}
              setInfo={setInfo}
              setStep={setStep}
            />
          )}
        </div>
      </ProjectLayout>
    </MainLayout>
  );
};

const OtherComponent = ({ otherType, setInfo, setStep }: any) => {
  const componentMapping: any = {
    0: AddGPRManually,
    1: AddSeismicManually,
    2: AddMagnetometricManually,
    3: AddTeleviewerManually,
    4: AddResistiviteManually,
  };
  const Component = componentMapping[otherType];
  return <Component setInfo={setInfo} setMainStep={setStep} />;
};

export default AddField;
