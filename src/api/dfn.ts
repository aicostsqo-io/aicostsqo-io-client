import { AxiosResponse } from "axios";
import { instance as axios } from "./axiosInstance";
import { DFN } from "@/types/models/dfn";

export const getByRpId = (rpId: string) => axios.get(`/dfns/by-rp/${rpId}`);
export const getById = (rpId: string) => axios.get(`/dfns/${rpId}`);
export const create = (data: any) => axios.post("/dfns", data);
