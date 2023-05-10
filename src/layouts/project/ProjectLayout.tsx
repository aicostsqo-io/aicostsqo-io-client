import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <div className="flex justify-between w-full gap-10 h-full py-10 px-14">
      <Sidebar />
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default ProjectLayout;
