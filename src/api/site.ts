import { SiteBound } from "@/types/models/site";
import axios from "./axiosInstance";

export const getSiteBounds = () => axios.get(`/siteBounds`);

export const createSiteBound = (data: SiteBound) =>
  axios.post(`/siteBounds`, data);

export const getSiteBoundByCustomerId = (customerId: string) =>
  axios.get(`/siteBounds/${customerId}`);
