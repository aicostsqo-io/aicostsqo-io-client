import React from "react";
import {
  IoAddCircleOutline as AddIcon,
  IoTrashOutline as TrashIcon,
  IoSearchOutline as SearchIcon
} from "react-icons/io5"; 
import {
  FaRegClone as CloneIcon
} from "react-icons/fa";
import { useRouter } from "next/router";

const AddSite = ({setAddSiteOption} : any) => {
  const router = useRouter();
  return <div className="flex justify-between">
    <div className="flex flex-col gap-3 items-center cursor-pointer" onClick={() => setAddSiteOption(0)}>
      <AddIcon className="text-4xl"/>
      <span className="text-lg">Add Site</span>
    </div>
    <div className="flex flex-col gap-3 items-center cursor-pointer">
      <SearchIcon className="text-4xl"/>
      <span className="text-lg">Search In</span>
    </div>
    <div className="flex flex-col gap-3 items-center cursor-pointer">
      <CloneIcon className="text-4xl"/>
      <span className="text-lg">Clone From Previous Site</span>
    </div>

    <div className="flex flex-col gap-3 items-center cursor-pointer" onClick={() => router.push("/project")}>
      <TrashIcon className="text-4xl"/>
      <span className="text-lg">Cancel</span>
    </div>
  </div>;
};

export default AddSite;
