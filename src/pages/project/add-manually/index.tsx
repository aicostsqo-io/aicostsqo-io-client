import AddRP from "@/components/add-manually/rp/AddRP";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { AddSharp } from "@mui/icons-material";
import React, { useState } from "react";
import AddSite from "@/components/add-manually/site";
import AddDisc from "@/components/add-manually/discontinuities/AddDisc";
import { useTreeContext } from "@/contexts/Tree";
import { MANUALLY_ADD_FIELDS } from "@/constants/fields";
import AddGPR from "@/components/add-manually/other/add-gpr-manually";
import MethodTopBar from "./MethodTopBar";
import AddScanline from "@/components/add-manually/field-survey/scanline/AddScanline";
import NotYetImplemented from "@/components/common/NotYetImplemented";

const MANUALLY_ADD_FIELDS_COMPONENTS = {
  [MANUALLY_ADD_FIELDS.IMPORT_SITE]: AddSite,
  [MANUALLY_ADD_FIELDS.IMPORT_RP]: AddRP,
  [MANUALLY_ADD_FIELDS.IMPORT_DISCONTINUITIES]: AddDisc,
  [MANUALLY_ADD_FIELDS.IMPORT_GPR]: AddGPR,
  [MANUALLY_ADD_FIELDS.IMPORT_SCANLINE]: AddScanline,
  [MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED]: NotYetImplemented,
};

interface ManuallyAddFieldsMap {
  [key: string]: React.ComponentType<any> | string;
}

const MANUALLY_ADD_FIELDS_COMPONENTS_MAP: ManuallyAddFieldsMap = {
  "Import Site":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.IMPORT_SITE],
  "Import Field Survey Data":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import Scanline":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.IMPORT_SCANLINE],
  "Import Joint Sets":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import Drilling":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import Lidar":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import Ground Penetrating Radar (GPR)":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.IMPORT_GPR],
  "Import Magnetometry":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import Resistivity":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import Seismic":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import RP (Representing Prisms)":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.IMPORT_RP],
  "Import Discontinuities":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.IMPORT_DISCONTINUITIES],
  "Import Polyhedrons":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
  "Import Max Quboids":
    MANUALLY_ADD_FIELDS_COMPONENTS[MANUALLY_ADD_FIELDS.NOT_YET_IMPLEMENTED],
};

const AddManually = () => {
  // const [page, setPage] = useState(0);
  const [method, setMethod] = useState("manual");

  const { point } = useTreeContext();

  const AddManuallyComponent =
    MANUALLY_ADD_FIELDS_COMPONENTS_MAP[point] || NotYetImplemented;

  return (
    <MainLayout>
      <ProjectLayout>
        <MethodTopBar method={method} setMethod={setMethod} />
        <AddManuallyComponent method={method} />
      </ProjectLayout>
    </MainLayout>
  );

  /* return (
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
  ); */
};

export default AddManually;
