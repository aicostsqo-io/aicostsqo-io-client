import { getFieldSurveyJointSets } from "@/api/jointSet";
import { getFieldSurveyLidars } from "@/api/lidar";
import { useSiteContext } from "@/contexts/Site";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
/* import {
  IoAddCircleOutline as AddIcon,
  IoClose as CloseIcon,
  IoSaveOutline as SaveIcon,
  IoSearchOutline as SearchIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5"; */

const JointSetsData = () => {
  const [data, setData] = useState<any>([]);
  const { selectedSite } = useSiteContext();

  const fetchData = async () => {
    try {
      const {
        site: { _id },
      } = selectedSite;
      const res = await getFieldSurveyLidars(_id);
      console.log("res", res);
      const { lidars, message, success } = res.data;
      if (!success) throw new Error(message);
      setData(lidars);
      toast.success(message);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col modal-container py-3 min-h-[200px] justify-between">
      <h1 className="modal-container-title">Data Sets</h1>

      <div className="overflow-scroll my-10 mx-5">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">
                <input type="checkbox" /* onChange={handleSelectAll} */ />
              </th>
              <th className="py-3 px-6 text-left">Site Id</th>
              <th className="py-3 px-6 text-left">Id</th>
              <th className="py-3 px-6 text-left">Slope</th>
              <th className="py-3 px-6 text-left">Slope Direction</th>
              <th className="py-3 px-6 text-left">pX</th>
              <th className="py-3 px-6 text-left">pY</th>
              <th className="py-3 px-6 text-left">pZ</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.map((p: any) => (
              <tr key={p._id} className="border-b border-gray-200">
                <td className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    //   checked={selectedRows.includes(p._id)}
                    //   onChange={(e) => handleSelectRow(e, p._id)}
                  />
                </td>
                <td className="py-3 px-6 text-left">{p?.siteId}</td>
                <td className="py-3 px-6 text-left">{p?._id}</td>
                <td className="py-3 px-6 text-left">{p?.dip}</td>
                <td className="py-3 px-6 text-left">{p?.dipDirection}</td>
                <td className="py-3 px-6 text-left">{p?.pX}</td>
                <td className="py-3 px-6 text-left">{p?.pY}</td>
                <td className="py-3 px-6 text-left">{p?.pZ}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*  <div className="w-3/4 mx-auto">
        <div className="flex justify-between">
          <div
            className="flex flex-col gap-3 items-center cursor-pointer"
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            onClick={() => setIsModalOpen(true)}
          >
            <AddIcon className="text-4xl" />
            <span className="text-lg">Add New Line</span>
          </div>
          <div className="flex flex-col gap-3 items-center cursor-pointer">
            <SearchIcon className="text-4xl" />
            <span className="text-lg">Search In</span>
          </div>
          <div
            className="flex flex-col gap-3 items-center cursor-pointer"
            // onClick={handleDeleteSelectedRows}
          >
            <TrashIcon className="text-4xl" />
            <span className="text-lg">Delete Selected Rows</span>
          </div>
          <div className="flex flex-col gap-3 items-center cursor-pointer">
            <SaveIcon className="text-4xl" />
            <span className="text-lg">Save</span>
          </div>
          <div className="flex flex-col gap-3 items-center cursor-pointer">
            <CloseIcon className="text-4xl" />
            <span className="text-lg">Cancel</span>
          </div>
        </div>
      </div> */}
      {/* 
      {isModalOpen ? (
        <AddDiscontinuity
          onClose={() => setIsModalOpen(false)}
          refetch={() => fetchData()}
        />
      ) : null} */}
    </div>
  );
};

export default JointSetsData;
