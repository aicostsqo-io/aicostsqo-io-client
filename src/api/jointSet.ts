import { instance as axios } from "./axiosInstance";

export const getExportedJointSets = (siteId: string) =>
  axios.get(`/joint-sets/export/by-site/${siteId}`);
