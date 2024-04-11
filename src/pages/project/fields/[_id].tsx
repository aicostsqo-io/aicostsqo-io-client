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

  return (
    <MainLayout>
      <ProjectLayout>
        <TopBar page={page} setPage={setPage} />
        {point === "Site Main" && (
          <div className="h-full flex justify-center items-center text-5xl font-bold">
            {siteData?.site?.name} Mining Field
          </div>
        )}
        {point === "Site Topological Map" && page === 0 && <Topological />}
        {point === "Site Boundaries" && page === 0 && <Boundaries />}
        {point === "Representing Prisms" && page === 0 && (
          <AllRPsVisualization />
        )}
        {point === "Representing Prisms" && page === 1 && <RPData editable />}
        {/* {point.startsWith("RPItem") && page === 0 && <RP />}
         */}
        {point === "RPItem" && (page === 0 || page === 1 || page === 3) && (
          <div className="h-full flex justify-center items-center text-5xl font-bold">
            {selectedRP?.name}
          </div>
        )}

        {point === "RP" && page === 0 && <RPVisualization />}
        {point === "RP" && page === 1 && <RPData />}
        {point === "Discontinuities (scanline measure)" && page === 0 && (
          <DiscontinuitiesVisualization />
        )}
        {point === "Discontinuities (scanline measure)" && page === 1 && (
          <DiscontinuitiesData />
        )}

        {point === "Field Survey" && <h1>In Progress!</h1>}

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
