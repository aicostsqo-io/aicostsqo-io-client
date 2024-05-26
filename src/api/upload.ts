import { instance as axios } from "./axiosInstance";

export const uploadFile = (data: any) => axios.post(`/uploads`, data);
export const uploadExcel = (data: any, path: string) =>
  axios.post(`${path}/import/from-xlsx`, data);
