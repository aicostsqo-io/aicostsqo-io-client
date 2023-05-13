import axios from "./axiosInstance";

export const bulkDeleteRps = (data: string[]) =>
  axios.post("/rps/bulk-delete", data);

export const getRps = () => axios.get("/rps");
