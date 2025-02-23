import { createContext, useState, ReactNode, useContext } from "react";

type MenuContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      "useDropdownMenu must be used within a DropdownMenuProvider"
    );
  }
  return context;
};
