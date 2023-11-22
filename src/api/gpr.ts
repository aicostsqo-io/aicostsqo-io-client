import { instance as axios } from "./axiosInstance";

export const getRpsBySiteId = (siteId: any) =>
  axios.get(`/gprs/by-site/${siteId}`);

export const getGprDataBySiteId = (siteId: any) =>
  axios.get(`/gprs/by-site/${siteId}`);

export const createGPR = (data: any) => axios.post(`/gprs`, data);
export const createGPRProfile = (data: any) =>
  axios.post(`/gprs/profiles`, data);

export const bulkDeleteGPR = (gprs: string[]) =>
  axios.post(`/gprs/bulk-delete`, gprs);
export const bulkDeleteGPRProfile = (gprProfiles: string[]) =>
  axios.post(`/gprs/profiles/bulk-delete`, gprProfiles);
