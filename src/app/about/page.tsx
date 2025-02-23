"use client";
import {
  DropdownMenuProvider,
  DropdownMenu,
  DropdownMenuItem,
} from "@/components/dropdown-menu";
import { Flex } from "@radix-ui/themes";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw] bg-black",
};

export default function About() {
  return (
    <main className={classes.main}>
      <DropdownMenuProvider>
        <DropdownMenu>
          <Flex direction="column" gap="2">
            <DropdownMenuItem href={paths.home.getHref()}>
              Home
            </DropdownMenuItem>
          </Flex>
        </DropdownMenu>
      </DropdownMenuProvider>
    </main>
  );
}
