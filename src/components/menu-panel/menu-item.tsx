import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import { useMenuContext } from "./menu-provider";

export type MenuItemProps = {
  className?: string;
  href?: string;
  children: React.ReactNode;
};

const TRANSITION_DURATION = 500;

export const MenuItem = ({
  href,
  className,
  children,
  ...props
}: MenuItemProps) => {
  const router = useRouter();
  const { isOpen, setIsOpen } = useMenuContext();

  const handleNavigationClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.href;
    setIsOpen(!isOpen);
    setTimeout(() => router.push(target), TRANSITION_DURATION);
  };

  return (
    <Button variant="classic" className="w-full" asChild>
      <a href={href} onClick={handleNavigationClick} {...props}>
        {children}
      </a>
    </Button>
  );
};
