import { instance as axios } from "./axiosInstance";

export const getTeleviewerDataBySiteId = (siteId: any) =>
  axios.get(`/televiewers/by-site/${siteId}`);

export const createTeleviewer = (data: any) => axios.post(`/televiewers`, data);

export const bulkDeleteTeleviewer = (televiewers: string[]) =>
  axios.post(`/televiewers/bulk-delete`, televiewers);
