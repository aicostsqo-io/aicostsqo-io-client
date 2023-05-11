import MainLayout from "@/layouts/main/MainLayout";
import React from "react";
import {
  IoAddCircleOutline as AddIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5";

const NewProject = () => {
  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="modal-container w-1/3 translate-y-full  py-6 px-3 flex flex-col justify-between  gap-16">
        <div className="modal-container-title">New Project</div>
        <div className="flex justify-between items-center gap-4">
          <div className="bg-gray-100 border-t-2 border-black w-1/2 py-2 px-3 text-center font-medium">
            Project Name :
          </div>
          <input
            type="text"
            className="py-2 px-2 w-1/2 border-2 border-black outline-none"
            placeholder="Enter the project name"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
            <AddIcon className="cursor-pointer opacity-40" size={50} />
            <span className="opacity-60">Create</span>
          </div>
          <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
            <TrashIcon className="cursor-pointer opacity-40" size={50} />
            <span className="opacity-60">Cancel</span>
          </div>
        </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewProject;
