import { instance as axios } from "./axiosInstance";

export const getFieldSurveyScanlines = (siteId: string) =>
  axios.get(`/scanlines/by-site/${siteId}`);

export const getExportedScanlines = (siteId: string) =>
  axios.get(`/scanlines/export/by-site/${siteId}`);
