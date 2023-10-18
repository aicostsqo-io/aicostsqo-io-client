import { getDiscsByRpId } from "@/api/disc";
import { useSiteContext } from "@/contexts/Site";
import { useTreeContext } from "@/contexts/Tree";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import {
  IoAddCircleOutline as AddIcon,
  IoClose as CloseIcon,
  IoSaveOutline as SaveIcon,
  IoSearchOutline as SearchIcon,
  IoTrashOutline as TrashIcon,
} from "react-icons/io5";

const DiscData = () => {
  const [data, setData] = useState<any>([]);
  const [selectedRows, setselectedRows] = useState<string[]>([]);
  const { selectedDiscs, selectedRP } = useSiteContext();
  const { point } = useTreeContext();

  const fetchDiscData = async () => {
    const res = await getDiscsByRpId(selectedRP?._id);
    setData(res.data.message);
    console.log(res);
  };

  useEffect(() => {
    fetchDiscData();
    if (point === "Discontinuities (scanline measure)") {
      setData(selectedDiscs);
    } /* else if (point === "RPItem") {
      setData([selectedRP]);
    } */
  }, []);

  /* useEffect(() => {
    getRps()
      .then((newList) => setData(newList.data.rps))
      .catch((err) => console.log(err));
  }, []); */

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    /*   if (e.target.checked) setselectedRows(data.map((p) => p._id));
    else setselectedRows([]); */
  };
  const handleSelectRow = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    /*   if (e.target.checked) setselectedRows([...selectedRows, id]);
    else setselectedRows(selectedRows.filter((row) => row !== id)); */
  };
  const handleDeleteSelectedRows = (e: MouseEvent<HTMLDivElement>) => {
    /*   const rowsToDelete = selectedRows;
    bulkDeleteRps(rowsToDelete)
      .then((res) => {
        getRps()
          .then((newList) => setData(newList.data.rps))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    const updatedTableData = data.filter((row) => !row.isSelected);
    setData(updatedTableData); */
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
              <th className="py-3 px-6 text-left">RP Id</th>
              <th className="py-3 px-6 text-left">Id</th>
              <th className="py-3 px-6 text-left">Slope</th>
              <th className="py-3 px-6 text-left">Slope Direction</th>
              <th className="py-3 px-6 text-left">pX</th>
              <th className="py-3 px-6 text-left">pY</th>
              <th className="py-3 px-6 text-left">pZ</th>
              <th className="py-3 px-6 text-left">nX</th>
              <th className="py-3 px-6 text-left">nY</th>
              <th className="py-3 px-6 text-left">nZ</th>
              <th className="py-3 px-6 text-left">Type</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.map((p: any) => (
              <tr key={p._id} className="border-b border-gray-200">
                <td className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(p._id)}
                    onChange={(e) => handleSelectRow(e, p._id)}
                  />
                </td>
                <td className="py-3 px-6 text-left">{p.rpId}</td>
                <td className="py-3 px-6 text-left">{p._id}</td>
                <td className="py-3 px-6 text-left">{p.dip}</td>
                <td className="py-3 px-6 text-left">{p.dipDirect}</td>
                <td className="py-3 px-6 text-left">{p.pX}</td>
                <td className="py-3 px-6 text-left">{p.pY}</td>
                <td className="py-3 px-6 text-left">{p.pZ}</td>
                <td className="py-3 px-6 text-left">{p.nX}</td>
                <td className="py-3 px-6 text-left">{p.nY}</td>
                <td className="py-3 px-6 text-left">{p.nZ}</td>
                <td className="py-3 px-6 text-left">{p.type}</td>
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
    </div>
  );
};

export default DiscData;
