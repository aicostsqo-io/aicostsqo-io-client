import Boundaries from "@/components/fields/Boundaries";
import DiscontinuitiesVisualization from "@/components/fields/DiscontinuitiesVisualization";
import RPVisualization from "@/components/fields/RPVisualization";
import TopBar from "@/components/fields/TopBar";
import Topological from "@/components/fields/Topological";
import { useTreeContext } from "@/contexts/Tree";
import useFetch from "@/hooks/useFetch";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { useRouter } from "next/router";
import RPData from "@/components/fields/RPData";
import DiscontinuitiesData from "@/components/fields/DiscontinuitiesData";
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
import DFNVisualization from "@/components/fields/DFNVisualization";
import VirtualExtended1DRPsVisualization from "@/components/fields/VirtualExtended1DRPsVisualization";
import { FIELDS } from "@/constants/fields";
import RPDataEditable from "@/components/fields/RPDataEditable";
import { hasExactKey } from "@/utils";

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
  [FIELDS.DISCONTINUITIES_VISUALIZATION]: DiscontinuitiesVisualization,
  [FIELDS.DISCONTINUITIES_DATA]: DiscontinuitiesData,
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
  [FIELDS.DFN_VISUALIZATION]: DFNVisualization,
  [FIELDS.VIRTUAL_EXTENDED_1D_RPS_VISUALIZATION]:
    VirtualExtended1DRPsVisualization,
  [FIELDS.NOT_YET_IMPLEMENTED]: NotYetImplemented,
};

interface FieldsMap {
  [key: string]: React.ComponentType<any> | string;
}

const FIELDS_MAP: FieldsMap = {
  "Site Topological Map-0": FIELD_COMPONENTS[FIELDS.TOPOLOGICAL],
  "Site Boundaries-0": FIELD_COMPONENTS[FIELDS.BOUNDARIES],
  //   ---------- Representing Prisms ----------
  "Representing Prisms-0": FIELD_COMPONENTS[FIELDS.ALL_RPS_VISUALIZATION],
  "Representing Prisms-1": FIELD_COMPONENTS[FIELDS.RP_DATA_EDITABLE],
  //   ---------- RP ----------
  "RP-0": FIELD_COMPONENTS[FIELDS.RP_VISUALIZATION],
  "RP-1": FIELD_COMPONENTS[FIELDS.RP_DATA],
  //   ---------- RPItem ----------
  "RPItem-0": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "RPItem-1": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "RPItem-2": FIELD_COMPONENTS[FIELDS.RP_DISTRIBUTION_CURVES],
  "RPItem-3": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  //   ---------- Discontinuities (scanline measure) ----------
  "Discontinuities (scanline measure)-0":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_VISUALIZATION],
  "Discontinuities (scanline measure)-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_DATA],
  //   ---------- Discontinuities (GPR) ----------
  "Discontinuities (GPR)-0":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_GPR_VISUALIZATION],
  "Discontinuities (GPR)-1": FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_GPR_DATA],
  //   ---------- Discontinuities (Magnetometric) ----------
  "Discontinuities (Magnetometric)-0":
    FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Discontinuities (Magnetometric)-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_MAGNETOMETRIC_DATA],
  //   ---------- Discontinuities (Resistivity) ----------
  "Discontinuities (Resistivity)-0":
    FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Discontinuities (Resistivity)-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_RESISTIVITY_DATA],
  //   ---------- Discontinuities (Seismic) ----------
  "Discontinuities (Seismic)-0": FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Discontinuities (Seismic)-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_SEISMIC_DATA],
  //   ---------- Discontinuities (Televiewer) ----------
  "Discontinuities (Televiewer)-0":
    FIELD_COMPONENTS[FIELDS.NOT_YET_IMPLEMENTED],
  "Discontinuities (Televiewer)-1":
    FIELD_COMPONENTS[FIELDS.DISCONTINUITIES_TELEVIEWER_DATA],
  //   ---------- Virtual Extended ----------
  "Polyhedron-0": FIELD_COMPONENTS[FIELDS.POLYHEDRON_VISUALIZATION],
  "Extended (1D)-0":
    FIELD_COMPONENTS[FIELDS.VIRTUAL_EXTENDED_1D_RPS_VISUALIZATION],
  "Extended (3D)-0":
    FIELD_COMPONENTS[FIELDS.VIRTUAL_EXTENDED_3D_RPS_VISUALIZATION],
  "DFN-0": FIELD_COMPONENTS[FIELDS.DFN_VISUALIZATION],
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

  const key = `${point}-${page}`;
  const Component = FIELDS_MAP[key];

  if (Component && hasExactKey(router.query, "useNewFields")) {
    return (
      <MainLayout>
        <ProjectLayout>
          <TopBar page={page} setPage={setPage} />
          <Component />
        </ProjectLayout>
      </MainLayout>
    );
  } else if (hasExactKey(router.query, "useNewFields")) {
    return (
      <MainLayout>
        <ProjectLayout>
          <TopBar page={page} setPage={setPage} />
          <NotYetImplemented />
        </ProjectLayout>
      </MainLayout>
    );
  }

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
          <DiscontinuitiesVisualization />
        )}
        {point === "Discontinuities (scanline measure)" && page === 1 && (
          <DiscontinuitiesData />
        )}

        {point === "Polyhedron" && page === 0 && <PolyhedronVisualization />}

        {point === "Extended (1D)" && page === 0 && (
          <VirtualExtended1DRPsVisualization />
        )}
        {point === "Extended (3D)" && page === 0 && (
          <VirtualExtended3DRPsVisualization />
        )}
        {point === "DFN" && page === 0 && <DFNVisualization />}

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
};

export default Field;
