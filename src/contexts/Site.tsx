import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

export const SiteContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const SiteProvider: React.FC<props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sites, setSites] = useState<any>();
  const router = useRouter();

  const values: any = {
    loading,
    setLoading,
    sites,
    setSites,
  };

  return <SiteContext.Provider value={values}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => useContext(SiteContext);
