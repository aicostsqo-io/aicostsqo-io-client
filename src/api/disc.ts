import { instance as axios } from "./axiosInstance";

export const getDiscsByRpId = (id: any) => axios.get(`/discs/${id}`);
export const createDisc = (data: any) => axios.post("/discs", data);
export const bulkDeleteRpDiscs = (data: string[]) =>
  axios.post("/discs/bulk-delete", data);
