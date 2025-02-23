"use client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuProvider,
} from "@/components/ui/dropdown-menu";
import { Flex } from "@radix-ui/themes";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw] bg-black",
};

export default function Home() {
  return (
    <main className={classes.main}>
      <DropdownMenuProvider>
        <DropdownMenu>
          <Flex direction="column" gap="2">
            <DropdownMenuItem href={paths.about.getHref()}>
              About
            </DropdownMenuItem>
          </Flex>
        </DropdownMenu>
      </DropdownMenuProvider>
    </main>
  );
}
