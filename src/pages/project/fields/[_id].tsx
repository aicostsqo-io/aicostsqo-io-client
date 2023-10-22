import Boundaries from "@/components/fields/Boundaries";
import Discontinuities from "@/components/fields/Discontinuities";
import RP from "@/components/fields/RP";
import RPVisualization from "@/components/fields/RPVisualization";
import DataTab from "@/components/fields/RPData";
import TopBar from "@/components/fields/TopBar";
import Topological from "@/components/fields/Topological";
import { useTreeContext } from "@/contexts/Tree";
import useFetch from "@/hooks/useFetch";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RPData from "@/components/fields/RPData";
import DiscData from "@/components/fields/DiscData";

const Field = () => {
  const [page, setPage] = useState<number>(0);
  const router = useRouter();
  const { _id } = router.query;
  const { point } = useTreeContext();

  const {
    data: siteData,
    isLoading: siteDataLoading,
    isError: siteDataError,
    mutate: siteDataMutate,
  } = useFetch(_id ? `/fields/${_id}` : null);

  console.log("point : ", point);
  console.log("siteData : ", siteData);

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
          <div className="h-full flex justify-center items-center text-5xl font-bold">
            {siteData?.site?.name} Mining Field
          </div>
        )}
        {point === "Representing Prisms" && page === 1 && <RPData />}
        {point.startsWith("RPItem") && page === 0 && <RP />}
        {point === "RPItem" && page === 1 && <RPData />}
        {point === "RPVisualization" && page === 0 && <RPVisualization />}
        {point === "Discontinuities" && page === 0 && <Discontinuities />}
        {point === "Discontinuities (scanline measure)" && page === 1 && (
          <DiscData />
        )}
      </ProjectLayout>
    </MainLayout>
  );
};

export default Field;
