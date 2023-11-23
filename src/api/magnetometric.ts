import { instance as axios } from "./axiosInstance";

export const getMagnetometricDataBySiteId = (siteId: any) =>
  axios.get(`/magnetometrics/by-site/${siteId}`);

export const createMagnetometric = (data: any) =>
  axios.post(`/magnetometrics`, data);

export const bulkDeleteMagnetometric = (magnetometrics: string[]) =>
  axios.post(`/magnetometrics/bulk-delete`, magnetometrics);
