import { instance as axios } from "./axiosInstance";

export const getExportedScanlines = (siteId: string) =>
  axios.get(`/scanlines/export/by-site/${siteId}`);
