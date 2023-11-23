import { instance as axios } from "./axiosInstance";

export const getResistivityDataBySiteId = (siteId: any) =>
  axios.get(`/resistivities/by-site/${siteId}`);

export const createResistivity = (data: any) =>
  axios.post(`/resistivities`, data);
export const createResistivityProfile = (data: any) =>
  axios.post(`/resistivities/profiles`, data);

export const bulkDeleteResistivity = (resistivities: string[]) =>
  axios.post(`/resistivities/bulk-delete`, resistivities);
export const bulkDeleteResistivityProfile = (resistivityProfiles: string[]) =>
  axios.post(`/resistivities/profiles/bulk-delete`, resistivityProfiles);
