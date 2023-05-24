import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { User, UserRegister } from "@/types/models/user";
import { loginUser, registerUser } from "@/api/user";
import { UserLogin } from "@/types/models/user";
import { toast } from "react-toastify";

export const UserContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<props> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setCurrentUser(JSON.parse(localStorage.getItem("user_info") || "{}"));
      setLogged(true);
    } else {
      router.push("/login");
    }
  }, []);

  const register = (data: UserRegister) => {
    console.log(data);
    registerUser(data)
      .then((res: any) => {
        if (res?.status === 201 || res?.status === 200) {
          router.push("/login");
          toast.success("Registered successfully");
        }
      })
      .catch((err) => {});
  };

  const login = (data: UserLogin) => {
    loginUser(data)
      .then((res: any) => {
        console.log(res);
        if (res?.status === 201 || res?.status === 200) {
          toast.success("Login successfully");
          localStorage.setItem("access_token", res.data.tokens.access_token);
          localStorage.setItem("refresh_token", res.data.tokens.refresh_token);
          localStorage.setItem(
            "user_info",
            JSON.stringify({
              _id: res.data._id,
              full_name: res.data.full_name,
              email: res.data.email,
            })
          );
          setCurrentUser({
            _id: res.data._id,
            full_name: res.data.full_name,
            email: res.data.email,
          });
          setLogged(true);
          router.push("/");
        } else {
          toast.error(res); //- toastify error
          router.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setLogged(false);
    setCurrentUser(undefined);
    localStorage.removeItem("user_info");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    router.push("/login");
  };

  const values: any = {
    logged,
    setLogged,
    loading,
    setLoading,
    register,
    login,
    currentUser,
    logout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
