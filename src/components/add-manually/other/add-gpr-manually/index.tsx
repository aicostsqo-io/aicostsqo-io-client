import React, { useState } from "react";
import GPRTopBar from "./GPRTopBar";
import SetGPRData from "./SetGPRData";
import { AddProfiles } from "./AddProfiles";
import { AddDiscs } from "./AddDiscs";

interface GPRFieldsMap {
  [key: string]: React.ComponentType<any> | string;
}

const GPR_FIELDS_MAP: GPRFieldsMap = {
  info: SetGPRData,
  profile: AddProfiles,
  crack: AddDiscs,
};

interface AddGPRProps {
  method: string;
}

const AddGPR = ({ method }: AddGPRProps) => {
  const [gprStep, setGprStep] = useState("info");

  const GPRComponent = GPR_FIELDS_MAP[gprStep] || SetGPRData;

  return (
    <>
      <GPRTopBar gprStep={gprStep} setGprStep={setGprStep} />
      <GPRComponent method={method} />
    </>
  );
};

export default AddGPR;

// {page === 3 && gprStep === "info" && <SetGPRData method={method} />}
//         {page === 3 && gprStep === "profile" && <AddProfiles method={method} />}
//         {page === 3 && gprStep === "crack" && <AddDiscs method={method} />}
