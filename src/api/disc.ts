import { instance as axios } from "./axiosInstance";

export const getDiscsByRpId = (id: any) => axios.get(`/discs/${id}`);
