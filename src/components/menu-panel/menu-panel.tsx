"use client";
import { Flex } from "@radix-ui/themes";
import { cn } from "@/utils/cn";
import { useAppContext } from "@/app/provider";

export type MenuPanelProps = {
  className?: string;
  children: React.ReactNode;
};

const classes = {
  root: "animate__animated bg-white rounded-md shadow-md p-2 border border-gray-200",
};

export const MenuPanel = ({
  className,
  children,
  ...props
}: MenuPanelProps) => {
  const { isShow } = useAppContext();
  return (
    <nav
      className={cn(
        classes.root,
        isShow ? "animate__bounceInDown" : "animate__bounceOutUp",
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
