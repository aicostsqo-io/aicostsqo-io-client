import RPInfo from "@/components/fields/RPInfo";
import DataTab from "@/components/fields/RPData";
import TopBar from "@/components/fields/TopBar";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import { useState } from "react";
import { assets } from "@/assets/imgs";
import Image from "next/image";
import { useTreeContext } from "@/contexts/Tree";

const Fields = () => {
  const [page, setPage] = useState<number>(-1);
  const { point } = useTreeContext();

  return (
    <MainLayout>
      <ProjectLayout>
        {/* <TopBar page={page} setPage={setPage} />
        {page === 0 && (
          <div className="flex flex-row h-full">
            <div className="w-3/4 flex justify-center items-center">
              <div className="w-[400px] h-[400px]">
                <Image
                  src={assets.rp}
                  alt=""
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <RPInfo />
          </div>
        )}
        {page === 1 && <DataTab />} */}
      </ProjectLayout>
    </MainLayout>
  );
};

export default Fields;
