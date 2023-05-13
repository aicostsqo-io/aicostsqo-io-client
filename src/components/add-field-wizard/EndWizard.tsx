import {
  IoSaveOutline as SaveIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5";

const EndWizard = ({ end, save }: any) => {
  return (
    <div className="flex flex-col gap-10 p-10  text-xl items-center">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <input type="checkbox" />{" "}
          <label htmlFor="">Generate Discontinuity Planes</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />{" "}
          <label htmlFor="">Calculate Polyhedrons</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />{" "}
          <label htmlFor="">Calculate Maximum Cuboids</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />{" "}
          <label htmlFor="">Generate Virtual 1D Extended RPs</label>
        </div>
      </div>

      <div className="flex gap-14">
        <div
          className="flex flex-col gap-3 items-center cursor-pointer"
          onClick={() => save()}
        >
          <SaveIcon className="text-4xl" />
          <span className="text-lg">Save</span>
        </div>
        <div className="flex flex-col gap-3 items-center cursor-pointer">
          <TrashIcon className="text-4xl" />
          <span className="text-lg">Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default EndWizard;
