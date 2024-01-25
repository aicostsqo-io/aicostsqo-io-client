import { instance as axios } from "./axiosInstance";

export const getDiscsByRpId = (id: any) => axios.get(`/rp-discs/${id}`);
export const createDisc = (data: any) => axios.post("/rp-discs", data);
export const bulkDeleteRpDiscs = (data: string[]) =>
  axios.post("/rp-discs/bulk-delete", data);
export const createDiscsByManual = (data: any) =>
  axios.post("/rp-discs/manual", data);
