import DataTab from "@/components/fields/Table";
import TopBar from "@/components/fields/TopBar";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { useState } from "react";

const Fields = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <MainLayout>
      <ProjectLayout>
        <TopBar page={page} setPage={setPage} />
        {page === 0 && (
          <div className="flex flex-col gap-10">Visualization</div>
        )}
        {page === 1 && <DataTab />}
      </ProjectLayout>
    </MainLayout>
  );
};

export default Fields;
