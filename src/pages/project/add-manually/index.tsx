import TopBar from "@/components/add-manually/TopBar";
import AddRP from "@/components/add-manually/rp/AddRP";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { AddSharp } from "@mui/icons-material";
import React, { useState } from "react";
import AddSite from "@/components/add-manually/site";
import AddDisc from "@/components/add-manually/discontinuities/AddDisc";
import SetGPRData from "@/components/add-manually/other/add-gpr-manually/SetGPRData";
import { AddProfiles } from "@/components/add-manually/other/add-gpr-manually/AddProfiles";
import { AddDiscs } from "@/components/add-manually/other/add-gpr-manually/AddDiscs";

const AddManually = () => {
  const [page, setPage] = useState(0);
  const [method, setMethod] = useState("manual");
  const [gprStep, setGprStep] = useState("info");
  return (
    <MainLayout>
      <ProjectLayout>
        <TopBar
          page={page}
          setPage={setPage}
          method={method}
          setMethod={setMethod}
          gprStep={gprStep}
          setGprStep={setGprStep}
        />

        {page === 0 && <AddSite method={method} />}
        {page === 1 && <AddRP method={method} />}
        {page === 2 && <AddDisc method={method} />}
        {page === 3 && gprStep === "info" && <SetGPRData method={method} />}
        {page === 3 && gprStep === "profile" && <AddProfiles method={method} />}
        {page === 3 && gprStep === "crack" && <AddDiscs method={method} />}
      </ProjectLayout>
    </MainLayout>
  );
};

export default AddManually;
