import { instance as axios } from "./axiosInstance";

export const bulkDeleteRps = (data: string[]) =>
  axios.post("/rps/bulk-delete", data);

export const getRps = () => axios.get("/rps");

export const createRp = (data: any) => axios.post("/rps", data);

export const getRpsBySiteBoundId = (siteBoundId: string) =>
  axios.get(`/rps/${siteBoundId}`);
