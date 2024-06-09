import { instance as axios } from "./axiosInstance";

export const getExportedLidars = (siteId: string) =>
  axios.get(`/lidars/export/by-site/${siteId}`);

export const getFieldSurveyLidars = (siteId: string) =>
  axios.get(`/lidars/by-site/${siteId}`);
