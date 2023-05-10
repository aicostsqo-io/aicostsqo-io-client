import React from "react";
import {
  IoAddCircleOutline as AddIcon,
  IoTrashOutline as TrashIcon,
  IoSearchOutline as SearchIcon
} from "react-icons/io5"; 
import {
  FaRegClone as CloneIcon
} from "react-icons/fa";

const AddSite = () => {
  return <div className="flex justify-between">
    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <AddIcon className="text-5xl"/>
      <span className="text-xl">Add Site</span>
    </div>
    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <SearchIcon className="text-5xl"/>
      <span className="text-xl">Search In</span>
    </div>
    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <CloneIcon className="text-5xl"/>
      <span className="text-xl">Clone From Previous Site</span>
    </div>

    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <TrashIcon className="text-5xl"/>
      <span className="text-xl">Cancel</span>
    </div>
  </div>;
};

export default AddSite;
