import { useSiteContext } from "@/contexts/Site";
import React from "react";

function RPDistributionCurves() {
  const { selectedRP } = useSiteContext();
  return <div>{selectedRP._id}</div>;
}

export default RPDistributionCurves;
