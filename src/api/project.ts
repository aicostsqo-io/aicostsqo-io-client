import { instance as axios } from "./axiosInstance";

export const getProjects = () => axios.get("/projects");
export const createProject = (data: any) => axios.post("/projects", data);
