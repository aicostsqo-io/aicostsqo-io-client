import { instance as axios } from "./axiosInstance";

export const getFieldSurveyDrillings = (siteId: string) =>
  axios.get(`/drilling/by-site/${siteId}`);
