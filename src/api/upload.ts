import { instance as axios } from "./axiosInstance";

export const uploadFile = (data: any) => axios.post(`/uploads`, data);
