import { useTreeContext } from "@/contexts/Tree";
import MainLayout from "@/layouts/main/MainLayout";
import ProjectLayout from "@/layouts/project/ProjectLayout";
import React, { useEffect } from "react";

const Project = () => {
  const { setExpanded } = useTreeContext();
  useEffect(() => {
    setExpanded([]);
  }, []);
  return (
    <MainLayout>
      <ProjectLayout>{null}</ProjectLayout>
    </MainLayout>
  );
};

export default Project;
