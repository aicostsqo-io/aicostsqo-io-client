import React from "react";
import Tree from "./Tree";

const Sidebar = () => {
  return (
    <div className="w-1/4 modal-container py-5 px-2 h-[800px]">
      <h1 className="modal-container-title">Project 01</h1>
      <Tree />
    </div>
  );
};

export default Sidebar;
