import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { UserRegister } from "@/types/models/user";
import { loginUser, registerUser } from "@/api/user";
import { UserLogin } from "@/types/models/user";

export const UserContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<props> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<undefined>();
  const router = useRouter();

  useEffect(() => {
    /* if (localStorage.getItem("token")) {
      setCurrentUser(JSON.parse(localStorage.getItem("userInfo") || "{}"));
      setLogged(true);
    } else {
      router.push("/login"); */
  }, []);

  const register = (data: UserRegister) => {
    registerUser(data)
      .then((res) => {
        if (res.data.success) {
          //- toastify success
          console.log(res.data.message);
          router.push("/login");
        } else {
          //- toastify error
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = (data: UserLogin) => {
    loginUser(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {};

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
