import { useContext } from "react";
import { MenuContext } from "./menu-context-provider";

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      "useDropdownMenu must be used within a DropdownMenuProvider"
    );
  }
  return context;
};
