"use client";
import { useState } from "react";
import NextLink from "next/link";
import { router } from "next/client";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Theme, Button, Flex } from "@radix-ui/themes";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] border border-green-500 h-[100vh] w-[100vw]",
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Theme accentColor="iris">
      <main className={classes.main}>
        <Button onClick={() => setIsOpen(!isOpen)}>Open</Button>

        <DropdownMenu isOpen={isOpen}>
          <Flex direction="column" gap="2">
            <NextLink href={paths.about.root.getHref()}>
              <Button>About</Button>
            </NextLink>
            <Button onClick={() => router.push("/til")}>Today I Learned</Button>
          </Flex>
        </DropdownMenu>
      </main>
    </Theme>
  );
}
