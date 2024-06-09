import { getExcel } from "@/api/excel";
import { getExcelTemplate, importFromExcel, uploadFile } from "@/api/upload";
import { useState } from "react";
import { toast } from "react-toastify";

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
    //     setLoading(true);
    //   setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await uploadFile(formData);
      const { filePath } = response.data;
      const importResponse = await importFromExcel(
        { fileName: filePath },
        path
      );
      const { success, message } = importResponse.data;
      if (success) {
        toast.success(message);
      }
      setFile(null);
    } catch (error: any) {
      toast.error("Something went wrong");
      // setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { file, setFile, loading, error, upload, excelTemplate };
};

export default useUploadExcel;
