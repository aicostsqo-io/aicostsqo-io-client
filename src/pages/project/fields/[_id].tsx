import Boundaries from "@/components/fields/Boundaries";
import RPDiscontinuitiesVisualization from "@/components/fields/DiscontinuitiesVisualization";
import RPVisualization from "@/components/fields/RPVisualization";
import TopBar from "@/components/fields/TopBar";
import Topological from "@/components/fields/Topological";
import { useTreeContext } from "@/contexts/Tree";
import useFetch from "@/hooks/useFetch";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { useRouter } from "next/router";
import RPData from "@/components/fields/RPData";
import RPDiscontinuitiesData from "@/components/fields/DiscontinuitiesData";
import { useSiteContext } from "@/contexts/Site";
import DiscontinuitiesGPRVisualization from "@/components/fields/GPR";
import DiscontinuitiesGPRData from "@/components/fields/GPR/DiscontinuitiesGPRData";
import DiscontinuitiesTeleviewerData from "@/components/fields/Televiewer/DiscontinuitiesTeleviewerData";
import DiscontinuitiesSeismicData from "@/components/fields/Seismic/DiscontinuitiesSeismicData";
import DiscontinuitiesMagnetometricData from "@/components/fields/Magnetometric/DiscontinuitiesMagnetometricData";
import DiscontinuitiesResistivityData from "@/components/fields/Resistivity/DiscontinuitiesResistivityData";
import AllRPsVisualization from "@/components/fields/AllRPsVisualization";
import VirtualExtended3DRPsVisualization from "@/components/fields/VirtualExtended3DRPsVisualization";
import PolyhedronVisualization from "@/components/fields/PolyhedronVisualization";
import RPDistributionCurves from "@/components/fields/RPDistributionCurves";
import VirtualExtended1DRPsVisualization from "@/components/fields/VirtualExtended1DRPsVisualization";
import { FIELDS } from "@/constants/fields";
import RPDataEditable from "@/components/fields/RPDataEditable";
import { hasFeatureTag } from "@/utils";
import ShowDFN from "@/components/fields/ShowDFN";
import ReCalculateDFN from "@/components/fields/ReCalculateDFN";
import SiteDiscontinuitiesData from "@/components/fields/FieldSurvey/Scanline";

const NotYetImplemented = () => {
  return (
    <div className="h-full flex justify-center items-center text-5xl font-bold">
      Not yet implemented
    </div>
  );
};

const FIELD_COMPONENTS = {
  [FIELDS.TOPOLOGICAL]: Topological,
  [FIELDS.BOUNDARIES]: Boundaries,
  [FIELDS.SITE_DISCONTINUITIES_DATA]: SiteDiscontinuitiesData,
  [FIELDS.SITE_DISCONTINUITIES_VISUALIZATION]: NotYetImplemented,
  [FIELDS.RP_DISCONTINUITIES_VISUALIZATION]: RPDiscontinuitiesVisualization,
  [FIELDS.RP_DISCONTINUITIES_DATA]: RPDiscontinuitiesData,
  [FIELDS.RP_VISUALIZATION]: RPVisualization,
  [FIELDS.RP_DATA]: RPData,
  [FIELDS.RP_DATA_EDITABLE]: RPDataEditable,
  [FIELDS.DISCONTINUITIES_GPR_VISUALIZATION]: DiscontinuitiesGPRVisualization,
  [FIELDS.DISCONTINUITIES_GPR_DATA]: DiscontinuitiesGPRData,
  [FIELDS.DISCONTINUITIES_TELEVIEWER_DATA]: DiscontinuitiesTeleviewerData,
  [FIELDS.DISCONTINUITIES_SEISMIC_DATA]: DiscontinuitiesSeismicData,
  [FIELDS.DISCONTINUITIES_MAGNETOMETRIC_DATA]: DiscontinuitiesMagnetometricData,
  [FIELDS.DISCONTINUITIES_RESISTIVITY_DATA]: DiscontinuitiesResistivityData,
  [FIELDS.ALL_RPS_VISUALIZATION]: AllRPsVisualization,
  [FIELDS.VIRTUAL_EXTENDED_3D_RPS_VISUALIZATION]:
    VirtualExtended3DRPsVisualization,
  [FIELDS.POLYHEDRON_VISUALIZATION]: PolyhedronVisualization,
  [FIELDS.RP_DISTRIBUTION_CURVES]: RPDistributionCurves,
  [FIELDS.VIRTUAL_EXTENDED_1D_RPS_VISUALIZATION]:
    VirtualExtended1DRPsVisualization,
  [FIELDS.DFN_SHOW]: ShowDFN,
  [FIELDS.DFN_RECALCULATE]: ReCalculateDFN,
  [FIELDS.NOT_YET_IMPLEMENTED]: NotYetImplemented,
};

interface FieldsMap {
  [key: string]: React.ComponentType<any> | string;
}

// TODO: relabel and comments (ex: Field Surver/Drilling/Televiewer)
const FIELDS_MAP: FieldsMap = {
  "Site Topological Map-0": FIELD_COMPONENTS[FIELDS.TOPOLOGICAL],
  "Site Boundaries-0": FIELD_COMPONENTS[FIELDS.BOUNDARIES],
  //   ---------- Discountinuities (Scanline) ----------
  "Field Survey - Scanline-0":
    FIELD_COMPONENTS[FIELDS.SITE_DISCONTINUITIES_VISUALIZATION],
  "Field Survey - Scanline-1":
    FIELD_COMPONENTS[FIELDS.SITE_DISCONTINUITIES_DATA],
  //   ---------- Discontinuities (GPR) ----------
  "Field Survey - Ground Penetrating Radar (GPR)-0":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_GPR_VISUALIZATION],
  "Field Survey - Ground Penetrating Radar (GPR)-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_GPR_DATA],
  //   ---------- Discontinuities (Magnetometric) ----------
  "Field Survey - Magnetometry-0": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Field Survey - Magnetometry-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_MAGNETOMETRIC_DATA],
  //   ---------- Discontinuities (Resistivity) ----------
  "Field Survey - Resistivity-0": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Field Survey - Resistivity-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_RESISTIVITY_DATA],
  //   ---------- Discontinuities (Seismic) ----------
  "Field Survey - Seismic-0": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Field Survey - Seismic-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_SEISMIC_DATA],
  //   ---------- Discontinuities (Televiewer) ----------
  "Field Survey - Televiewer-0": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Field Survey - Televiewer-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_TELEVIEWER_DATA],
  //   ---------- Virtual Extended ----------
  "Polyhedrons-0": FIELD_COMPONENTS[FIELDS.POLYHEDRON_VISUALIZATION],
  "1D Extended (Virtual Representative Prisms)-0":
    FIELD_COMPONENTS[FIELDS.VIRTUAL_EXTENDED_1D_RPS_VISUALIZATION],
  "3D Extended (Virtual Representative Prisms)-0":
    FIELD_COMPONENTS[FIELDS.VIRTUAL_EXTENDED_3D_RPS_VISUALIZATION],
  "Show DFN-0": FIELD_COMPONENTS[FIELDS.DFN_SHOW],
  "ReCalculate DFN-0": FIELD_COMPONENTS[FIELDS.DFN_RECALCULATE],
  //   ---------- Representing Prisms ----------
  "Representing Prisms-0": FIELD_COMPONENTS[FIELDS.ALL_RPS_VISUALIZATION],
  "Representing Prisms-1": FIELD_COMPONENTS[FIELDS.RP_DATA_EDITABLE],
  //   ---------- RPItem ----------
  "RPItem-0": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "RPItem-1": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "RPItem-2": FIELD_COMPONENTS[FIELDS.RP_DISTRIBUTION_CURVES],
  "RPItem-3": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  //   ---------- RP ----------
  "RP-0": FIELD_COMPONENTS[FIELDS.RP_VISUALIZATION],
  "RP-1": FIELD_COMPONENTS[FIELDS.RP_DATA],
  //   ---------- RP Discontinuities (scanline measure) ----------
  "Scanline-0": FIELD_COMPONENTS[FIELDS.RP_DISCONTINUITIES_VISUALIZATION],
  "Scanline-1": FIELD_COMPONENTS[FIELDS.RP_DISCONTINUITIES_DATA],
};

const Field = () => {
  const router = useRouter();
  const { _id } = router.query;
  const { point } = useTreeContext();
  const { selectedRP, page, setPage } = useSiteContext();

  const {
    data: siteData,
    isLoading: siteDataLoading,
    isError: siteDataError,
    mutate: siteDataMutate,
  } = useFetch(_id ? `/fields/${_id}` : null);

  // TODO: remove this if statement when new fields is fully implemented
  if (hasFeatureTag(router.query, "useOldFields")) {
    return (
      <MainLayout>
        <ProjectLayout>
          <TopBar page={page} setPage={setPage} />

          {/* dont delete */}
          {point === "Site Main" && (
            <div className="h-full flex justify-center items-center text-5xl font-bold">
              {siteData?.site?.name} Mining Field
            </div>
          )}

          {/* dont delete */}
          {point === "RPItem" && (page === 0 || page === 1 || page === 3) && (
            <div className="h-full flex justify-center items-center text-5xl font-bold">
              {selectedRP?.name}
            </div>
          )}

          {/* dont delete */}
          {point === "Field Survey" && <h1>In Progress!</h1>}

          {point === "Site Topological Map" && page === 0 && <Topological />}
          {point === "Site Boundaries" && page === 0 && <Boundaries />}
          {point === "Representing Prisms" && page === 0 && (
            <AllRPsVisualization />
          )}
          {point === "Representing Prisms" && page === 1 && <RPDataEditable />}

          {point === "RP" && page === 0 && <RPVisualization />}
          {point === "RP" && page === 1 && <RPData />}

          {point === "Discontinuities (scanline measure)" && page === 0 && (
            <RPDiscontinuitiesVisualization />
          )}
          {point === "Discontinuities (scanline measure)" && page === 1 && (
            <RPDiscontinuitiesData />
          )}

          {point === "Polyhedron" && page === 0 && <PolyhedronVisualization />}

          {point === "Extended (1D)" && page === 0 && (
            <VirtualExtended1DRPsVisualization />
          )}
          {point === "Extended (3D)" && page === 0 && (
            <VirtualExtended3DRPsVisualization />
          )}
          {point === "DFN" && page === 0 && <ReCalculateDFN />}

          {point === "Discontinuities (GPR)" && page === 0 && (
            <DiscontinuitiesGPRVisualization />
          )}
          {point === "Discontinuities (GPR)" && page === 1 && (
            <DiscontinuitiesGPRData />
          )}

          {point === "Discontinuities (Magnetometric)" &&
            page === 0 &&
            "Not yet implemented magnetometric visualization"}

          {point === "Discontinuities (Magnetometric)" && page === 1 && (
            <DiscontinuitiesMagnetometricData />
          )}

          {point === "Discontinuities (Resistivity)" &&
            page === 0 &&
            "Not yet implemented resistivity visualization"}

          {point === "Discontinuities (Resistivity)" && page === 1 && (
            <DiscontinuitiesResistivityData />
          )}

          {point === "Discontinuities (Seismic)" &&
            page === 0 &&
            "Not yet implemented seismic visualization"}
          {point === "Discontinuities (Seismic)" && page === 1 && (
            <DiscontinuitiesSeismicData />
          )}

          {point === "Discontinuities (Televiewer)" &&
            page === 0 &&
            "Not yet implemented televiewer visualization"}
          {point === "Discontinuities (Televiewer)" && page === 1 && (
            <DiscontinuitiesTeleviewerData />
          )}

          {/* Block Size Distribution Curves */}
          {point === "RPItem" && page === 2 && <RPDistributionCurves />}
        </ProjectLayout>
      </MainLayout>
    );
  }

  const key = `${point}-${page}`;
  console.log("key", key);
  const Component = FIELDS_MAP[key];

  if (Component) {
    return (
      <MainLayout>
        <ProjectLayout>
          <TopBar page={page} setPage={setPage} />
          <Component />
        </ProjectLayout>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <ProjectLayout>
        <TopBar page={page} setPage={setPage} />
        <NotYetImplemented />
      </ProjectLayout>
    </MainLayout>
  );
};

export default Field;
