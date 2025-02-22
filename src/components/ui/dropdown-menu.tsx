import { cn } from "@/utils/cn";

export type DropdownMenuProps = {
  className?: string;
  isOpen?: boolean;
  children: React.ReactNode;
};

const classes = {
  root: "animate__animated min-w-[300px] w-3/12 bg-white rounded-md shadow-md p-2 fixed z-10 left-10 top-10 border border-gray-200",
};

export const DropdownMenu = ({
  isOpen,
  className,
  children,
  ...props
}: DropdownMenuProps) => {
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
