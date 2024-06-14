import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

export const TreeContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const TreeProvider: React.FC<props> = ({ children }) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [point, setPoint] = useState<string>("");
  const [selectedRP, setSelectedRP] = useState<string>("");
  const [visualizationShowList, setVisualizationShowList] = useState<string[]>(
    []
  );

  const values: any = {
    expanded,
    setExpanded,
    point,
    setPoint,
    selectedRP,
    setSelectedRP,
    visualizationShowList,
    setVisualizationShowList,
  };

  return <TreeContext.Provider value={values}>{children}</TreeContext.Provider>;
};

export const useTreeContext = () => useContext(TreeContext);
