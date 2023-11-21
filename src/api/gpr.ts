import { instance as axios } from "./axiosInstance";

export const getRpsBySiteId = (siteId: any) =>
  axios.get(`/gprs/by-site/${siteId}`);
