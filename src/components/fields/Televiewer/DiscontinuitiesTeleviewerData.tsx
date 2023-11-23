import { bulkDeleteGPR, getGprDataBySiteId } from "@/api/gpr";
import { getTeleviewerDataBySiteId } from "@/api/televiewer";
import { useSiteContext } from "@/contexts/Site";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
("react");
import { HiCursorClick } from "react-icons/hi";

import {
  IoAddCircleOutline as AddIcon,
  IoClose as CloseIcon,
  IoSaveOutline as SaveIcon,
  IoSearchOutline as SearchIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5";

const DiscontinuitiesTeleviewerData = () => {
  const [data, setData] = useState<any>([]);
  const { selectedSite } = useSiteContext();
  const [selectedRows, setselectedRows] = useState<string[]>([]);
  const [isTeleviewerAddModalOpen, setIsAddTeleviewerModalOpen] =
    useState(false);

  const fetchTeleviewerData = async () => {
    const res = await getTeleviewerDataBySiteId(selectedSite?.site?._id);
    console.log(res?.data?.result);
    setData(res?.data?.result);
  };

  useEffect(() => {
    fetchTeleviewerData();
  }, []);

  /* useEffect(() => {
    if (selectedGPR) {
      const filteredProfiles = data?.gprProfiles?.filter(
        (p: any) => p.rectangleLineNumber === selectedGPR.rectangleNumber
      );
      console.log("filteredProfiles : ", filteredProfiles);
      setFilteredProfiles(filteredProfiles);
    }
  }, [data]); */

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
        await fetchTeleviewerData();
      })
      .catch((err: any) => console.log(err));
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
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Size X</th>
              <th className="py-3 px-6 text-left">Size Y</th>
              <th className="py-3 px-6 text-left">Size Z</th>
              <th className="py-3 px-6 text-left">Position X</th>
              <th className="py-3 px-6 text-left">Position Y</th>
              <th className="py-3 px-6 text-left">Position Z</th>
              <th className="py-3 px-6 text-left">Rotation X</th>
              <th className="py-3 px-6 text-left">Rotation Y</th>
              <th className="py-3 px-6 text-left">Rotation Z</th>
              <th className="py-3 px-6 text-left">Hole Number</th>
              <th className="py-3 px-6 text-left">X Hole</th>
              <th className="py-3 px-6 text-left">Y Hole</th>
              <th className="py-3 px-6 text-left">Z Hole</th>
              <th className="py-3 px-6 text-left">Hole Vertical Angle</th>
              <th className="py-3 px-6 text-left">Direction</th>
              <th className="py-3 px-6 text-left">Length of Hole</th>
              <th className="py-3 px-6 text-left">Diameter Core</th>
              <th className="py-3 px-6 text-left">Explanation</th>
              <th className="py-3 px-6 text-left">Image Dimension A</th>
              <th className="py-3 px-6 text-left">Image Dimension B</th>
              <th className="py-3 px-6 text-left">Perimeter X</th>
              <th className="py-3 px-6 text-left">Z Slice Z</th>
              <th className="py-3 px-6 text-left">Radius Pixels</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.televiewers?.map((televiewer?: any) => (
              <tr key={televiewer?._id} className="border-b border-gray-200">
                <td className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(televiewer?._id)}
                    onChange={(e) => handleSelectRow(e, televiewer?._id)}
                  />
                </td>
                <td className="py-3 px-6 text-left">{televiewer?.siteId}</td>
                <td className="py-3 px-6 text-left">{televiewer?._id}</td>
                <td className="py-3 px-6 text-left">{televiewer?.type}</td>
                <td className="py-3 px-6 text-left">{televiewer?.sizeX}</td>
                <td className="py-3 px-6 text-left">{televiewer?.sizeY}</td>
                <td className="py-3 px-6 text-left">{televiewer?.sizeZ}</td>
                <td className="py-3 px-6 text-left">{televiewer?.positionX}</td>
                <td className="py-3 px-6 text-left">{televiewer?.positionY}</td>
                <td className="py-3 px-6 text-left">{televiewer?.positionZ}</td>
                <td className="py-3 px-6 text-left">{televiewer?.rotationX}</td>
                <td className="py-3 px-6 text-left">{televiewer?.rotationY}</td>
                <td className="py-3 px-6 text-left">{televiewer?.rotationZ}</td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.holeNumber}
                </td>
                <td className="py-3 px-6 text-left">{televiewer?.xHole}</td>
                <td className="py-3 px-6 text-left">{televiewer?.yHole}</td>
                <td className="py-3 px-6 text-left">{televiewer?.zHole}</td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.holeVerticalAngle}
                </td>
                <td className="py-3 px-6 text-left">{televiewer?.direction}</td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.lengthOfHole}
                </td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.diameterCore}
                </td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.explanation}
                </td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.imageDimensionA}
                </td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.imageDimensionB}
                </td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.perimeterX}
                </td>
                <td className="py-3 px-6 text-left">{televiewer?.zSliceZ}</td>
                <td className="py-3 px-6 text-left">
                  {televiewer?.radiusPixels}
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
            onClick={() => setIsAddTeleviewerModalOpen(true)}
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

      {/* {isGPRProfilesModalOpen ? (
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
      ) : null} */}
    </div>
  );
};

export default DiscontinuitiesTeleviewerData;
