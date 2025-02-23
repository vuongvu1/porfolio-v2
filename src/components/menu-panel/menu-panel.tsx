import { cn } from "@/utils/cn";
import { MenuPanelProvider } from "./menu-context-provider";
import { useMenuContext } from "./use-menu-context";

export type MenuPanelProps = {
  className?: string;
  children: React.ReactNode;
};

const classes = {
  root: "animate__animated min-w-[300px] w-3/12 bg-white rounded-md shadow-md p-2 fixed z-10 left-10 top-10 border border-gray-200",
};

const MenuPanelBase = ({ className, children, ...props }: MenuPanelProps) => {
  const { isOpen } = useMenuContext();
  return (
    <div
      className={cn(
        classes.root,
        isOpen ? "animate__bounceInDown" : "animate__bounceOutUp",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const MenuPanel = (props: MenuPanelProps) => {
  return (
    <MenuPanelProvider>
      <MenuPanelBase {...props} />
    </MenuPanelProvider>
  );
};
