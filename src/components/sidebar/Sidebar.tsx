import React from "react";
import Tree from "./tree";
import { useSiteContext } from "@/contexts/Site";

const Sidebar = () => {
  const { currentProject } = useSiteContext();

  return (
    <div className="w-1/4 modal-container py-5 px-2 h-[800px]">
      <h1 className="modal-container-title">
        {currentProject?.name || "Project"}
      </h1>
      <Tree />
    </div>
  );
};

export default Sidebar;
