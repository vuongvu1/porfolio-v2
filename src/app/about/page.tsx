"use client";

import { Flex } from "@radix-ui/themes";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw] bg-black",
};

export default function About() {
  return (
    <main className={classes.main}>
      <MenuPanel>
        <Flex direction="column" gap="2">
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
        </Flex>
      </MenuPanel>
    </main>
  );
}
