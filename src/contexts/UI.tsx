import { createContext, useContext, useState } from "react";

const UIContext = createContext<any>(null);

type props = {
  children: React.ReactNode;
};

export const UIProvider: React.FC<props> = ({ children }: any) => {
  const [activeModal, setActiveModal] = useState<string>("");

  const values: any = {
    activeModal,
    setActiveModal,
  };
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};

export const useUIContext = () => useContext(UIContext);
