import { bulkDeleteGPR, getGprDataBySiteId } from "@/api/gpr";
import { useSiteContext } from "@/contexts/Site";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
("react");
import { HiCursorClick } from "react-icons/hi";
import GPRProfiles from "./GPRProfiles";
import AddGPRModal from "./AddGPRModal";
import {
  IoAddCircleOutline as AddIcon,
  IoClose as CloseIcon,
  IoSaveOutline as SaveIcon,
  IoSearchOutline as SearchIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5";

const DiscontinuitiesGPRData = () => {
  const [data, setData] = useState<any>([]);
  const [selectedGPR, setSelectedGPR] = useState<any>(null);
  const [filteredProfiles, setFilteredProfiles] = useState<any>([]);
  const { selectedSite } = useSiteContext();
  const [isGPRProfilesModalOpen, setIsGPRProfilesModalOpen] =
    useState<boolean>(false);
  const [isAddGPRModalOpen, setIsAddGPRModalOpen] = useState<boolean>(false);
  const [selectedRows, setselectedRows] = useState<string[]>([]);

  const fetchGPRData = async () => {
    const res = await getGprDataBySiteId(selectedSite?.site?._id);
    // console.log(res?.data?.result);
    setData(res?.data?.result);
  };

  useEffect(() => {
    fetchGPRData();
  }, []);

  useEffect(() => {
    if (selectedGPR) {
      const filteredProfiles = data?.gprProfiles?.filter(
        (p: any) => p.rectangleLineNumber === selectedGPR.rectangleNumber
      );
      console.log("filteredProfiles : ", filteredProfiles);
      setFilteredProfiles(filteredProfiles);
    }
  }, [data]);

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
    bulkDeleteGPR(rowsToDelete)
      .then(async () => {
        await fetchGPRData();
      })
      .catch((err: any) => console.log(err));
    /* const updatedTableData = data.filter((row: any) => !row.isSelected);
    setData(updatedTableData); */
  };

  const handleClickRectangleNumber = (gpr: any) => {
    const filteredProfiles = data?.gprProfiles?.filter(
      (p: any) => p.rectangleLineNumber === gpr.rectangleNumber
    );
    setSelectedGPR(gpr);
    setFilteredProfiles(filteredProfiles);
    setIsGPRProfilesModalOpen(true);
  };

  return (
    <div className="flex flex-col modal-container py-3 min-h-[300px] justify-between">
      <h1 className="modal-container-title">Data Sets</h1>

      <div className="overflow-scroll my-10 mx-5">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">
                <input type="checkbox" onChange={handleSelectAll} />
              </th>
              <th className="py-3 px-6 text-left">Site Id</th>
              <th className="py-3 px-6 text-left">Id</th>
              <th className="py-3 px-6 text-left">Rectangle Number</th>
              <th className="py-3 px-6 text-left">Antenna</th>
              <th className="py-3 px-6 text-left">Dimension</th>
              <th className="py-3 px-6 text-left">
                Longitudinal Profile Number
              </th>
              <th className="py-3 px-6 text-left">
                Longitudinal Profiles Max Depth
              </th>
              <th className="py-3 px-6 text-left">
                Longitudinal Profiles Max Distance
              </th>
              <th className="py-3 px-6 text-left">Traversal Profile Number</th>
              <th className="py-3 px-6 text-left">
                Traversal Profiles Max Depth
              </th>
              <th className="py-3 px-6 text-left">
                Traversal Profiles Max Distance
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.gprs?.map((gpr: any) => (
              <tr key={gpr._id} className="border-b border-gray-200">
                <td className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(gpr._id)}
                    onChange={(e) => handleSelectRow(e, gpr._id)}
                  />
                </td>
                <td className="py-3 px-6 text-left">{gpr.siteId}</td>
                <td className="py-3 px-6 text-left">{gpr._id}</td>
                <td
                  className="py-3 px-6 text-left font-bold text-blue-500 flex items-center"
                  onClick={() => handleClickRectangleNumber(gpr)}
                >
                  <span className="">{gpr.rectangleNumber}</span>
                  <HiCursorClick className="ml-1 text-lg " />
                </td>
                <td className="py-3 px-6 text-left">{gpr.antenna}</td>
                <td className="py-3 px-6 text-left">{gpr.dimension}</td>
                <td className="py-3 px-6 text-left">
                  {gpr.longitudinalProfileNumber}
                </td>
                <td className="py-3 px-6 text-left">
                  {gpr.longitudinalProfilesMaxDepth}
                </td>
                <td className="py-3 px-6 text-left">
                  {gpr.longitudinalProfilesMaxDistance}
                </td>
                <td className="py-3 px-6 text-left">
                  {gpr.traversalProfileNumber}
                </td>
                <td className="py-3 px-6 text-left">
                  {gpr.traversalProfilesMaxDepth}
                </td>
                <td className="py-3 px-6 text-left">
                  {gpr.traversalProfilesMaxDistance}
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
            onClick={() => setIsAddGPRModalOpen(true)}
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

      {isGPRProfilesModalOpen ? (
        <GPRProfiles
          onClose={() => setIsGPRProfilesModalOpen(false)}
          profiles={filteredProfiles}
          rectangleLineNumber={selectedGPR?.rectangleNumber}
          refetch={() => fetchGPRData()}
        />
      ) : null}

      {isAddGPRModalOpen ? (
        <AddGPRModal
          onClose={() => setIsAddGPRModalOpen(false)}
          refetch={() => fetchGPRData()}
        />
      ) : null}
    </div>
  );
};

export default DiscontinuitiesGPRData;
