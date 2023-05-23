import DataTab from "@/components/fields/Table";
import TopBar from "@/components/fields/TopBar";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { useState } from "react";

const Field = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <MainLayout>
      <ProjectLayout>
        <TopBar page={page} setPage={setPage} />
        {page === 0 && (
          <div className="flex flex-row">
            <div className="w-3/4 bg-red-300"></div>
            <div className="w-1/4 bg-blue-300">
              <table className="w-full text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {page === 1 && <DataTab />}
      </ProjectLayout>
    </MainLayout>
  );
};

export default Field;
