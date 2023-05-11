import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <div className="flex justify-between w-full gap-10 min-h-screen py-10 px-14">
      <Sidebar />
      <div className="w-4/5 flex flex-col gap-10">{children}</div>
    </div>
  );
};

export default ProjectLayout;