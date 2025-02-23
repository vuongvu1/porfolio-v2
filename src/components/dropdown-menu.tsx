import { MouseEvent, createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import { cn } from "@/utils/cn";

export type DropdownMenuProps = {
  className?: string;
  isOpen?: boolean;
  children: React.ReactNode;
};

const classes = {
  root: "animate__animated min-w-[300px] w-3/12 bg-white rounded-md shadow-md p-2 fixed z-10 left-10 top-10 border border-gray-200",
};

type DropdownMenuContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const DropdownMenuContext = createContext<DropdownMenuContextType | undefined>(
  undefined
);

export const useDropdownMenu = () => {
  const context = useContext(DropdownMenuContext);

  if (!context) {
    throw new Error(
      "useDropdownMenu must be used within a DropdownMenuProvider"
    );
  }
  return context;
};

export const DropdownMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownMenuContext.Provider>
  );
};

export const DropdownMenu = ({
  className,
  children,
  ...props
}: Omit<DropdownMenuProps, "isOpen">) => {
  const { isOpen } = useDropdownMenu();
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

export type DropdownMenuItemProps = {
  className?: string;
  href?: string;
  children: React.ReactNode;
};

const TRANSITION_DURATION = 500;

export const DropdownMenuItem = ({
  href,
  className,
  children,
  ...props
}: DropdownMenuItemProps) => {
  const router = useRouter();
  const { isOpen, setIsOpen } = useDropdownMenu();

  const handleNavigationClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.href;
    setIsOpen(!isOpen);
    setTimeout(() => router.push(target), TRANSITION_DURATION);
  };

  return (
    <Button className="w-full" asChild>
      <a href={href} onClick={handleNavigationClick}>
        {children}
      </a>
    </Button>
  );
};
