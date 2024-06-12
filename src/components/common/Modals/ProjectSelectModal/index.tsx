import { getProjects } from "@/api/project";
import { createRp, getRpsBySiteBoundId } from "@/api/rp";
import { useSiteContext } from "@/contexts/Site";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { FaLocationArrow } from "react-icons/fa";

interface Props {
  onClose: () => void;
}

const ProjectSelectModal = ({ onClose }: Props) => {
  const [projects, setProjects] = useState<any>([]);
  const { setProject } = useSiteContext();
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data.projects);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProjects();
  }, []);

  const handleGoProject = (project: any) => {
    setProject(project);
    const { _id } = project;
    router.push(`/project/${_id}`);
    onClose();
  };

  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 w-full flex justify-center items-center overflow-scroll z-[1000000] tracking-wider">
      <div className="bg-white text-black radius-lg w-1/2 flex flex-col">
        <div className="modal-header py-5 px-7 flex justify-between border-b border-slate-600 border-opacity-50">
          <span className="modal-header-title font-bold text-xl">
            Select Project to Continue
          </span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-3xl" />
          </button>
        </div>
        <div className="modal-body px-7 py-5">
          {projects.map((project: any) => (
            <div
              key={project._id}
              onClick={() => handleGoProject(project)}
              className="group cursor-pointer flex justify-between text-xl py-4 mt-2 px-6 border-b border-slate-800 border-opacity-50 rounded hover:bg-slate-800 hover:text-white"
            >
              <span>{project.name}</span>
              <FaLocationArrow className="text-3xl invisible group-hover:visible" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSelectModal;
