import React from "react";
import {
  IoAddCircleOutline as AddIcon,
  IoTrashOutline as TrashIcon,
  IoSearchOutline as SearchIcon
} from "react-icons/io5"; 
import {
  FaRegClone as CloneIcon
} from "react-icons/fa"; 
import {
  GrCaretNext as NextIcon
} from "react-icons/gr";

const AddOther = () => {
  return <div className="flex justify-between">
    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <AddIcon className="text-5xl"/>
      <span className="text-xl">Add Manually</span>
    </div>
    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <SearchIcon className="text-5xl"/>
      <span className="text-xl">Search In</span>
    </div>
    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <CloneIcon className="text-5xl"/>
      <span className="text-xl">Clone From My Measurements</span>
    </div>

    <div className="flex flex-col gap-5 items-center cursor-pointer">
      <NextIcon className="text-5xl"/>
      <span className="text-xl">Not Yet</span>
    </div>
  </div>;
};

export default AddOther;
