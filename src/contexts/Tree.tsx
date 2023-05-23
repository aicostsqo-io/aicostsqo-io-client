import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

export const TreeContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const TreeProvider: React.FC<props> = ({ children }) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const values: any = {
    expanded,
    setExpanded,
  };

  return <TreeContext.Provider value={values}>{children}</TreeContext.Provider>;
};

export const useTreeContext = () => useContext(TreeContext);
