import { bulkDeleteGPR, getGprDataBySiteId } from "@/api/gpr";
import { getResistivityDataBySiteId } from "@/api/resistivite";
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

const DiscontinuitiesResistivityData = () => {
  const [data, setData] = useState<any>([]);
  const { selectedSite } = useSiteContext();
  const [selectedRows, setselectedRows] = useState<string[]>([]);
  const [isResistivityAddModalOpen, setIsAddResistivityModalOpen] =
    useState(false);

  const fetchResistivityData = async () => {
    const res = await getResistivityDataBySiteId(selectedSite?.site?._id);
    console.log(res?.data?.result);
    setData(res?.data?.result);
  };

  useEffect(() => {
    fetchResistivityData();
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
        await fetchResistivityData();
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
              <th className="py-3 px-6 text-left">Resistivity</th>
              <th className="py-3 px-6 text-left">Profile Number</th>
              <th className="py-3 px-6 text-left">Depth</th>
              <th className="py-3 px-6 text-left">Distance</th>
              <th className="py-3 px-6 text-left">
                Resistivity Measurement Id
              </th>
              <th className="py-3 px-6 text-left">
                Resistivity Profile Directory
              </th>
              <th className="py-3 px-6 text-left">Explanation</th>
              <th className="py-3 px-6 text-left">Altitude Max</th>
              <th className="py-3 px-6 text-left">Altitude Min</th>
              <th className="py-3 px-6 text-left">Latitude Max</th>
              <th className="py-3 px-6 text-left">Latitude Min</th>
              <th className="py-3 px-6 text-left">Longitude Max</th>
              <th className="py-3 px-6 text-left">Longitude Min</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.resistivities?.map((resistivity: any) => (
              <tr key={resistivity?._id} className="border-b border-gray-200">
                <td className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(resistivity?._id)}
                    onChange={(e) => handleSelectRow(e, resistivity?._id)}
                  />
                </td>
                <td className="py-3 px-6 text-left">{resistivity?.siteId}</td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.resistivity}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.profileNumber}
                </td>
                <td className="py-3 px-6 text-left">{resistivity?.depth}</td>
                <td className="py-3 px-6 text-left">{resistivity?.distance}</td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.resistivityMeasurementId}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.resistivityProfileDirectory}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.explanation}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.altitudeMax}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.altitudeMin}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.latitudeMax}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.latitudeMin}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.longitudeMax}
                </td>
                <td className="py-3 px-6 text-left">
                  {resistivity?.longitudeMin}
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
            onClick={() => setIsAddResistivityModalOpen(true)}
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

export default DiscontinuitiesResistivityData;
