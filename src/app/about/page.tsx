"use client";
import { useState } from "react";
import Link from "next/link";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button, Flex } from "@radix-ui/themes";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] border border-green-500 h-[100vh] w-[100vw]",
};

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <main className={classes.main}>
      <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>Open</Button>

      <DropdownMenu isOpen={isMenuOpen}>
        <Flex direction="column" gap="2">
          <Link href={paths.home.getHref()} tabIndex={-1}>
            <Button className="w-full">Home</Button>
          </Link>
          <Link href={paths.about.getHref()} tabIndex={-1}>
            <Button className="w-full">About</Button>
          </Link>
        </Flex>
      </DropdownMenu>
    </main>
  );
}
