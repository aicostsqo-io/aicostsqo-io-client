import React, { createContext, useContext, useState } from "react";

export const SiteContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const SiteProvider: React.FC<props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sites, setSites] = useState<any>();
  const [selectedRP, setSelectedRP] = useState<any>();
  const [selectedRPs, setSelectedRPs] = useState<any>();
  const [selectedDiscs, setSelectedDiscs] = useState<any>();

  const values: any = {
    loading,
    setLoading,
    sites,
    setSites,
    selectedRP,
    setSelectedRP,
    selectedRPs,
    setSelectedRPs,
    selectedDiscs,
    setSelectedDiscs,
  };

  return <SiteContext.Provider value={values}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => useContext(SiteContext);
