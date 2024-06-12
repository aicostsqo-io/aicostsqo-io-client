import useUploadExcel from "@/hooks/useUploadExcel";
import { useEffect, useState } from "react";
import SiteList from "../../SiteList";
import { getSites } from "@/api/site";
import { useSiteContext } from "@/contexts/Site";

const Excel = () => {
  const { file, setFile, upload, excelTemplate } = useUploadExcel();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sites, setSites] = useState<any>([]);
  const { currentProject } = useSiteContext();

  const fetchSites = async () => {
    try {
      const response = await getSites(currentProject?._id);
      const sites = response?.data?.map((siteData: any) => siteData.site);
      setSites(sites);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSites();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      setFile(file);
    }
  };

  const handleUploadClick = () => {
    if (file) {
      upload(file, "/televiewers");
    }
  };

  const handleGetExcelTemplate = () => {
    excelTemplate("/televiewers");
  };

  const handleShowSiteList = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="my-4">
        <label className="block text-sm font-medium text-gray-700">
          Excel Dosyası Yükle
        </label>
        <div className="mt-1 flex items-center">
          <input
            type="file"
            className="p-2 border rounded-md"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleUploadClick}
          >
            Upload
          </button>
          <button
            type="button"
            className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleGetExcelTemplate}
          >
            Sample File
          </button>
          <button
            type="button"
            className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleShowSiteList}
          >
            Show Site List
          </button>
        </div>
      </div>
      {isModalOpen ? (
        <SiteList sites={sites} onClose={() => setIsModalOpen(false)} />
      ) : null}
    </>
  );
};

export default Excel;
