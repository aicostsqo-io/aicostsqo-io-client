import useFetch from "@/hooks/useFetch";
import React, { createContext, useContext, useEffect, useState } from "react";

export const SiteContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const SiteProvider: React.FC<props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sites, setSites] = useState<any>();
  const [selectedSite, setSelectedSite] = useState<any>();
  const [selectedRP, setSelectedRP] = useState<any>();
  const [selectedRPs, setSelectedRPs] = useState<any>();
  const [selectedDiscs, setSelectedDiscs] = useState<any>();
  const [page, setPage] = useState<number>(0);
  const [currentProject, setCurrentProject] = useState<any>();

  const { data, isLoading, isError, mutate } = useFetch(
    currentProject?._id ? `/fields/project/${currentProject?._id}` : null
  );

  useEffect(() => {
    const currentProject = localStorage.getItem("currentProject");
    if (currentProject) {
      setCurrentProject(JSON.parse(currentProject));
    }
  }, []);

  const setProject = (project: any) => {
    // local storage
    localStorage.setItem("currentProject", JSON.stringify(project));
    // state
    setCurrentProject(project);
  };

  const values: any = {
    loading,
    setLoading,
    sites,
    setSites,
    selectedSite,
    setSelectedSite,
    selectedRP,
    setSelectedRP,
    selectedRPs,
    setSelectedRPs,
    selectedDiscs,
    setSelectedDiscs,
    setPage,
    page,
    currentProject,
    setProject,
    data,
    mutate,
  };

  return <SiteContext.Provider value={values}>{children}</SiteContext.Provider>;
};

export const useSiteContext = () => useContext(SiteContext);
