import { UserLogin, UserRegister } from "@/types/models/user";
import axios from "./axiosInstance";

export const registerUser = (data: UserRegister) => axios.post("/users", data);

export const loginUser = (data: UserLogin) => axios.post("/auth/login", data);
