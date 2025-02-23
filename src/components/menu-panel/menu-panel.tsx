import { Flex } from "@radix-ui/themes";
import { cn } from "@/utils/cn";
import { useMenuContext } from "./menu-provider";

export type MenuPanelProps = {
  className?: string;
  children: React.ReactNode;
};

const classes = {
  root: "animate__animated min-w-[200px] w-3/12 bg-white rounded-md shadow-md p-2 fixed z-10 left-10 top-10 border border-gray-200",
};

export const MenuPanel = ({
  className,
  children,
  ...props
}: MenuPanelProps) => {
  const { isOpen } = useMenuContext();
  return (
    <nav
      className={cn(
        classes.root,
        isOpen ? "animate__bounceInDown" : "animate__bounceOutUp",
        className
      )}
      {...props}
    >
      <Flex direction="column" gap="2">
        {children}
      </Flex>
    </nav>
  );
};
