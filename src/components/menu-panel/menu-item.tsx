"use client";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";
import { useAppContext } from "@/app/provider";

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
  const { setIsShow } = useAppContext();

  const toggleMenu = () => setIsShow((isShow) => !isShow);

  const handleNavigationClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.href;
    toggleMenu();

    setTimeout(() => {
      router.push(target);
      toggleMenu();
    }, TRANSITION_DURATION);
  };

  return (
    <Button className="w-full" asChild>
      <a
        href={href}
        onClick={handleNavigationClick}
        className={className}
        {...props}
      >
        {children}
      </a>
    </Button>
  );
};
