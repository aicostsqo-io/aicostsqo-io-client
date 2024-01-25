import TopBar from "@/components/add-manually/TopBar";
import AddRP from "@/components/add-manually/rp/AddRP";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { AddSharp } from "@mui/icons-material";
import React, { useState } from "react";
import AddSite from "@/components/add-manually/site";
import AddDisc from "@/components/add-manually/discontinuities/AddDisc";

const AddManually = () => {
  const [page, setPage] = useState(0);
  const [method, setMethod] = useState("manual");
  return (
    <MainLayout>
      <ProjectLayout>
        <TopBar
          page={page}
          setPage={setPage}
          method={method}
          setMethod={setMethod}
        />

        {page === 0 && <AddSite />}
        {page === 1 && <AddRP method={method} />}
        {page === 2 && <AddDisc method={method} />}
      </ProjectLayout>
    </MainLayout>
  );
};

export default AddManually;
