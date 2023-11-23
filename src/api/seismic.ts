import { instance as axios } from "./axiosInstance";

export const getSeismicDataBySiteId = (siteId: any) =>
  axios.get(`/seismics/by-site/${siteId}`);

export const createSeismic = (data: any) => axios.post(`/seismics`, data);
export const createSeismicProfile = (data: any) =>
  axios.post(`/seismics/profiles`, data);

export const bulkDeleteSeismic = (seismics: string[]) =>
  axios.post(`/seismics/bulk-delete`, seismics);
export const bulkDeleteSeismicProfile = (seismicProfiles: string[]) =>
  axios.post(`/seismics/profiles/bulk-delete`, seismicProfiles);
