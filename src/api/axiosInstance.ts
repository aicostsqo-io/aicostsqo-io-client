import axios from "axios";
import { toast } from "react-toastify";

const apiURL = process.env.NEXT_PUBLIC_BASE_ENDPOINT;

const instance = axios.create({
  baseURL: apiURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.log("Please login again.");
      //localStorage.removeItem("token");
      //window.location.href = "/login";
    }
    try {
      // toast.error(error?.response?.data?.message);
    } catch (e) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
    return error;
  }
);

const fetcher = (url: string) => instance.get(url).then((res) => res.data);

export { instance, fetcher };
