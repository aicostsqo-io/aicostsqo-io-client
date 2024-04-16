import { instance as axios } from "./axiosInstance";

export const getExportedLidars = (siteId: string) =>
  axios.get(`/lidars/export/by-site/${siteId}`);
