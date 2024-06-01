import { instance as axios } from "./axiosInstance";

export const uploadFile = (data: any) => axios.post(`/uploads`, data);
export const importFromExcel = (data: any, path: string) =>
  axios.post(`${path}/import/from-xlsx`, data);
export const getExcelTemplate = (path: string) =>
  axios.get(`${path}/import/xlsx-template`);
