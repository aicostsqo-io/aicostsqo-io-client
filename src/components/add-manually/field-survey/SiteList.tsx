import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
("react");

interface SiteListProps {
  sites: any[];
  onClose: () => void;
}

const SiteList = ({ sites, onClose }: SiteListProps) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(sites);
  }, [sites]);

  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 w-full flex justify-center items-center overflow-scroll z-[100] tracking-wider">
      <div className="bg-white text-black radius-lg w-4/5 flex flex-col gap-7 min-h-[300px] max-h-screen">
        <div className="modal-header py-3 px-7 flex justify-between border-b border-slate-600 border-opacity-50">
          <span className="modal-header-title font-bold">Sites</span>
          <button type="button" onClick={() => onClose()}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <div className="px-5 pb-5">
          <div className="flex flex-col modal-container min-h-[200px] justify-between w-full">
            <div className="overflow-scroll my-5 mx-5">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Site Id</th>
                    <th className="py-3 px-6 text-left">Site Name</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data?.map((site: any) => (
                    <tr key={site._id} className="border-b border-gray-200">
                      <td className="py-3 px-6 text-left">{site._id}</td>
                      <td className="py-3 px-6 text-left">{site.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteList;
