import { SiteBound } from "@/types/models/site";
import { instance as axios } from "./axiosInstance";

export const getSiteBounds = () => axios.get(`/siteBounds`);

export const getSites = () => axios.get(`/sites`);

export const createSiteByManual = (data: any) =>
  axios.post(`/fields/manual`, data);

export const createSite = (data: any) => axios.post(`/fields`, data);

export const createSiteBound = (data: SiteBound) =>
  axios.post(`/siteBounds`, data);

export const getSiteBoundByCustomerId = (customerId: string) =>
  axios.get(`/siteBounds/${customerId}`);
