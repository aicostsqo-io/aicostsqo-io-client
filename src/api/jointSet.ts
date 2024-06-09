import { instance as axios } from "./axiosInstance";

export const getExportedJointSets = (siteId: string) =>
  axios.get(`/joint-sets/export/by-site/${siteId}`);

export const getFieldSurveyJointSets = (siteId: string) =>
  axios.get(`/joint-sets/by-site/${siteId}`);
