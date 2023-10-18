import React, { useState } from "react";
import {
  IoAddCircleOutline as AddIcon,
  IoTrashOutline as TrashIcon,
  IoSearchOutline as SearchIcon
} from "react-icons/io5";
import { FaRegClone as CloneIcon } from "react-icons/fa";
import { GrCaretNext as NextIcon } from "react-icons/gr";
import Options from "../Options";

const discTypes = [
  "Scan-line",
  "Discontinuity Sets",
  "Drilling / Borehole",
  "Disc planes made from point cloud"
];

const AddDisc = ({ next, setAddDiscOption, discType, setDiscType }: any) => {
  return (
    <div className="flex-col justify-between">
      <div className="flex justify-between">
        <div
          className="flex flex-col gap-3 items-center cursor-pointer"
          onClick={() => setAddDiscOption(0)}
        >
          <AddIcon className="text-4xl" />
          <span className="text-lg">Add Manually (Discs)</span>
        </div>
        <div className="flex flex-col gap-3 items-center cursor-pointer">
          <SearchIcon className="text-4xl" />
          <span className="text-lg">Search In</span>
        </div>
        <div className="flex flex-col gap-3 items-center cursor-pointer">
          <CloneIcon className="text-4xl" />
          <span className="text-lg">Clone From Previous My Discs</span>
        </div>

        <div
          className="flex flex-col gap-3 items-center cursor-pointer"
          onClick={() => next()}
        >
          <NextIcon className="text-4xl" />
          <span className="text-lg">Not Yet</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10 text-lg">
        {discTypes?.map((discType: string, index: number) => (
          <div key={index} className="flex gap-3">
            <input
              type="radio"
              value={index}
              name="type"
              id={discType}
              onChange={(e) => setDiscType(parseInt(e.target.value))}
            />
            <label htmlFor={discType}>{discType}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDisc;
