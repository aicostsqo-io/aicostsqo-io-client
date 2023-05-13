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
import Options from "../Options";

const options = ["GPR","Electrical Resistivity", "Point Clouds", "Etc."]

const AddOther = ({next, setAddOtherOption}:any) => {
  return (
    <div className="flex-col justify-between">
      <div className="flex justify-between">
    <div className="flex flex-col gap-3 items-center cursor-pointer" onClick={() => setAddOtherOption(0)}> 
      <AddIcon className="text-4xl"/>
      <span className="text-lg">Add Manually</span>
    </div>
    <div className="flex flex-col gap-3 items-center cursor-pointer">
      <SearchIcon className="text-4xl"/>
      <span className="text-lg">Search In</span>
    </div>
    <div className="flex flex-col gap-3 items-center cursor-pointer">
      <CloneIcon className="text-4xl"/>
      <span className="text-lg">Clone From My Measurements</span>
    </div>

    <div className="flex flex-col gap-3 items-center cursor-pointer" onClick={() => next()}>
      <NextIcon className="text-4xl"/>
      <span className="text-lg">Not Yet</span>
    </div>
  </div>
  <Options options={options}/>
    </div>
  );
};

export default AddOther;
