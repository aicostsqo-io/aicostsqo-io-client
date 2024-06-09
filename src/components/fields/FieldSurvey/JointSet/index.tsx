import { getFieldSurveyJointSets } from "@/api/jointSet";
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
      const res = await getFieldSurveyJointSets(_id);
      console.log("res", res);
      const { jointSets, message, success } = res.data;
      if (!success) throw new Error(message);
      setData(jointSets);
      toast.success(message);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*  dip: 6;
  dipDirection: 66;
  discontinuitySetId: 6;
  expectationTraceLength: 6;
  frictionAngle: 6;
  location: "6";
  plunge: 6;
  positionX: 6;
  positionY: 6;
  positionZ: 66;
  shape: "6";
  siteId: "65e4c31bd8e27e92f3321272";
  trend: 6;
  type: "6"; */

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
              <th className="py-3 px-6 text-left">Discontinuity Set Id</th>
              <th className="py-3 px-6 text-left">Dip</th>
              <th className="py-3 px-6 text-left">Dip Direction</th>
              <th className="py-3 px-6 text-left">Expectation Trace Length </th>
              <th className="py-3 px-6 text-left">Friction Angle</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Plunge</th>
              <th className="py-3 px-6 text-left">Position X</th>
              <th className="py-3 px-6 text-left">Position Y</th>
              <th className="py-3 px-6 text-left">Position Z</th>
              <th className="py-3 px-6 text-left">Shape</th>
              <th className="py-3 px-6 text-left">Trend</th>
              <th className="py-3 px-6 text-left">Type</th>
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
                <td className="py-3 px-6 text-left">{p?.discontinuitySetId}</td>
                <td className="py-3 px-6 text-left">{p?.dip}</td>
                <td className="py-3 px-6 text-left">{p?.dipDirection}</td>
                <td className="py-3 px-6 text-left">
                  {p?.expectationTraceLength}
                </td>
                <td className="py-3 px-6 text-left">{p?.frictionAngle}</td>
                <td className="py-3 px-6 text-left">{p?.location}</td>
                <td className="py-3 px-6 text-left">{p?.plunge}</td>
                <td className="py-3 px-6 text-left">{p?.positionX}</td>
                <td className="py-3 px-6 text-left">{p?.positionY}</td>
                <td className="py-3 px-6 text-left">{p?.positionZ}</td>
                <td className="py-3 px-6 text-left">{p?.shape}</td>
                <td className="py-3 px-6 text-left">{p?.trend}</td>
                <td className="py-3 px-6 text-left">{p?.type}</td>
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
