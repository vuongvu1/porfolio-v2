"use client";
import { createContext, useState, ReactNode, useContext } from "react";

type AppContextType = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <AppContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
