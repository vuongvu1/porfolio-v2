"use client";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button, Flex } from "@radix-ui/themes";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw] bg-black",
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = useRouter();

  const handleNavigationClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = event.currentTarget.href;
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => router.push(target), 500);
  };

  return (
    <main className={classes.main}>
      <DropdownMenu isOpen={isMenuOpen}>
        <Flex direction="column" gap="2">
          <Button className="w-full" asChild>
            <a href={paths.about.getHref()} onClick={handleNavigationClick}>
              About
            </a>
          </Button>
        </Flex>
      </DropdownMenu>
    </main>
  );
}
