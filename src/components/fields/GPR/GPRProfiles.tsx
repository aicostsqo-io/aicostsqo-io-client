import { bulkDeleteGPRProfile, getGprDataBySiteId } from "@/api/gpr";
import { useSiteContext } from "@/contexts/Site";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
("react");
import {
  IoAddCircleOutline as AddIcon,
  IoClose as CloseIcon,
  IoSaveOutline as SaveIcon,
  IoSearchOutline as SearchIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5";
import AddGPRProfileModal from "./AddGPRProfileModal";

interface GPRProfilesProps {
  rectangleLineNumber: number;
  refetch: () => void;
  profiles: any[];
  onClose: () => void;
}

const GPRProfiles = ({
  profiles,
  onClose,
  rectangleLineNumber,
  refetch,
}: GPRProfilesProps) => {
  const [data, setData] = useState<any>([]);
  const [selectedRows, setselectedRows] = useState<string[]>([]);
  const [isAddGPRAddProfileModalOpen, setIsAddGPRAddProfileModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    setData(profiles);
  }, [profiles]);

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setselectedRows(data.map((p: any) => p._id));
    else setselectedRows([]);
  };
  const handleSelectRow = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    if (e.target.checked) setselectedRows([...selectedRows, id]);
    else setselectedRows(selectedRows.filter((row) => row !== id));
  };
  const handleDeleteSelectedRows = (e: MouseEvent<HTMLDivElement>) => {
    const rowsToDelete = selectedRows;
    console.log("rowsToDelete : ", rowsToDelete);
    bulkDeleteGPRProfile(rowsToDelete)
      .then(async () => {
        refetch();
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 w-full flex justify-center items-center overflow-scroll z-[100] tracking-wider">
      <div className="bg-white text-black radius-lg w-4/5 flex flex-col gap-7 min-h-[300px] max-h-screen">
        <div className="modal-header py-3 px-7 flex justify-between border-b border-slate-600 border-opacity-50">
          <span className="modal-header-title font-bold">GPR Profiles</span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col modal-container min-h-[200px] justify-between w-full pb-5">
          <h1 className="modal-container-title">Data Sets</h1>
          <div className="overflow-scroll my-5 mx-5">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">
                    <input type="checkbox" onChange={handleSelectAll} />
                  </th>
                  <th className="py-3 px-6 text-left">Site Id</th>
                  <th className="py-3 px-6 text-left">Id</th>
                  <th className="py-3 px-6 text-left">Rectangle Line Number</th>
                  <th className="py-3 px-6 text-left">Number Of Profile</th>
                  <th className="py-3 px-6 text-left">Profile Type</th>
                  <th className="py-3 px-6 text-left">Starting Vertex X</th>
                  <th className="py-3 px-6 text-left">Starting Vertex Y</th>
                  <th className="py-3 px-6 text-left">Starting Vertex Z</th>
                  <th className="py-3 px-6 text-left">End Vertex X</th>
                  <th className="py-3 px-6 text-left">End Vertex Y</th>
                  <th className="py-3 px-6 text-left">End Vertex Z</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data?.map((profile: any) => (
                  <tr key={profile._id} className="border-b border-gray-200">
                    <td className="py-3 px-6 text-left">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(profile._id)}
                        onChange={(e) => handleSelectRow(e, profile._id)}
                      />
                    </td>
                    <td className="py-3 px-6 text-left">{profile.siteId}</td>
                    <td className="py-3 px-6 text-left">{profile._id}</td>
                    <td className="py-3 px-6 text-left">
                      {profile.rectangleLineNumber}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.numberOfProfile}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.profileType}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.startingVertexX}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.startingVertexY}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.startingVertexZ}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.endVertexX}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.endVertexY}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {profile.endVertexZ}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-3/4 mx-auto">
            <div className="flex justify-between">
              <div
                className="flex flex-col gap-3 items-center cursor-pointer"
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                onClick={() => setIsAddGPRAddProfileModalOpen(true)}
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
                onClick={handleDeleteSelectedRows}
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
          </div>
          {isAddGPRAddProfileModalOpen ? (
            <AddGPRProfileModal
              rectangleLineNumber={rectangleLineNumber}
              onClose={() => setIsAddGPRAddProfileModalOpen(false)}
              refetch={() => refetch()}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GPRProfiles;
