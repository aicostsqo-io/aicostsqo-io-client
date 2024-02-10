import React from "react";
import {
  IoAddCircleOutline as AddIcon,
  IoTrashOutline as TrashIcon,
  IoSearchOutline as SearchIcon,
} from "react-icons/io5";
import { FaRegClone as CloneIcon } from "react-icons/fa";
import { GrCaretNext as NextIcon } from "react-icons/gr";

const AddRP = ({ next, setAddRpOption }: any) => {
  return (
    <div className="flex justify-between">
      <div
        className="flex flex-col gap-3 items-center cursor-pointer"
        onClick={() => setAddRpOption(0)}
      >
        <AddIcon className="text-4xl" />
        <span className="text-lg">Add Manually (RPs)</span>
      </div>
      <div className="flex flex-col gap-3 items-center cursor-pointer">
        <SearchIcon className="text-4xl" />
        <span className="text-lg">Search In</span>
      </div>
      <div className="flex flex-col gap-3 items-center cursor-pointer">
        <CloneIcon className="text-4xl" />
        <span className="text-lg">Clone From Previous My RPs</span>
      </div>

      <div
        className="flex flex-col gap-3 items-center cursor-pointer"
        onClick={() => next()}
      >
        <NextIcon className="text-4xl" />
        <span className="text-lg">Not Yet</span>
      </div>
    </div>
  );
};

export default AddRP;
