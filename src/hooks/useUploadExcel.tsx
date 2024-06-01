import { getExcel } from "@/api/excel";
import { getExcelTemplate, importFromExcel, uploadFile } from "@/api/upload";
import { useState } from "react";

const useUploadExcel = () => {
  const [file, setFile] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const excelTemplate = async (path: string) => {
    try {
      const response = await getExcelTemplate(path);
      console.log("response", response);
      const { success, result } = response.data;
      if (success) {
        getExcel(result);
      }
    } catch (error: any) {
      console.log("error", error);
      setError(error.message);
    }
  };

  const upload = async (file: any, path: string) => {
    console.log("file", file);
    console.log("path", path);
    //     setLoading(true);
    //   setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await uploadFile(formData);
      console.log("response", response);
      const { filePath } = response.data;
      const importResponse = await importFromExcel(
        { fileName: filePath },
        path
      );
      console.log("importResponse", importResponse);
    } catch (error: any) {
      console.log("error", error);
      setError(error.message);
    }

    setLoading(false);
  };

  return { file, setFile, loading, error, upload, excelTemplate };
};

export default useUploadExcel;
