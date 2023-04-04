import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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

  const register = () => {};
  const login = () => {};

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
