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
import { useState } from "react";
import RPData from "@/components/fields/RPData";

const Field = () => {
  const [page, setPage] = useState<number>(0);
  const router = useRouter();
  const { _id } = router.query;
  const { point } = useTreeContext();
  console.log(point);

  const {
    data: siteData,
    isLoading: siteDataLoading,
    isError: siteDataError,
    mutate: siteDataMutate,
  } = useFetch(`/fields/${_id}`);

  console.log(siteData);

  return (
    <MainLayout>
      <ProjectLayout>
        <TopBar page={page} setPage={setPage} />
        {point === "Site Main" && (
          <div className="h-full flex justify-center items-center text-5xl font-bold">
            {siteData?.site?.name} Maden Alanı
          </div>
        )}
        {point === "Site Topological Map" && page === 0 && <Topological />}
        {point === "Site Boundaries" && page === 0 && <Boundaries />}
        {point === "RP" && page === 0 && <RP />}
        {point === "RPVisualization" && page === 0 && <RPVisualization />}
        {point === "RPVisualization" && page === 1 && <RPData />}
        {point === "Discontinuities" && page === 0 && <Discontinuities />}
      </ProjectLayout>
    </MainLayout>
  );
};

export default Field;
