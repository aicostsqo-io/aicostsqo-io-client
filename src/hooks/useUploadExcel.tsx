import { uploadExcel } from "@/api/upload";
import { useState } from "react";

const useUploadExcel = () => {
  const [file, setFile] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: any, path: string) => {
    console.log("file", file);
    console.log("path", path);
    //     setLoading(true);
    //   setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await uploadExcel(formData, path);
      console.log("response", response);
    } catch (error: any) {
      console.log("error", error);
      setError(error.message);
    }

    setLoading(false);
  };

  return { file, setFile, loading, error, upload };
};

export default useUploadExcel;
