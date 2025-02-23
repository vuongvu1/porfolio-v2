import { createContext, useState, ReactNode } from "react";

type MenuContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const MenuPanelProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
