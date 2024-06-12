import { createProject } from "@/api/project";
import { useSiteContext } from "@/contexts/Site";
import { useUserContext } from "@/contexts/User";
import MainLayout from "@/layouts/main/MainLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { toast } from "react-toastify";

const NewProject = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const { currentUser } = useUserContext();
  const { setProject } = useSiteContext();

  const handleCreate = async () => {
    try {
      const res = await createProject({ name, user: currentUser._id });
      if (res.status !== 200) {
        return;
      }
      toast.success("Project created successfully");
      const {
        data: { project },
      } = res;
      setProject(project);
      router.push(`/project/${project?._id}`);
    } catch (err) {
      toast.error("Failed to create project");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center w-full h-full">
        <div className="modal-container w-[700px] translate-y-full  py-6 px-3 flex flex-col justify-between  gap-16">
          <div className="modal-container-title">New Project</div>
          <div className="flex justify-between items-center gap-4">
            <div className="bg-gray-100 border-t-2 border-black w-1/2 py-2 px-3 text-center font-medium">
              Project Name :
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-2 px-2 w-1/2 border-2 border-black outline-none"
              placeholder="Enter the project name"
            />
          </div>

          <button
            className="bg-white text-slate-700 hover:bg-slate-700 hover:text-white border-slate-700 border-2 py-2 px-4 rounded-md font-medium transition-all duration-300"
            onClick={handleCreate}
          >
            Create Project
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewProject;
