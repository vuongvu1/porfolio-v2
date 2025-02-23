"use client";

import { Flex } from "@radix-ui/themes";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw] bg-black",
};

export default function Home() {
  return (
    <main className={classes.main}>
      <MenuPanel>
        <Flex direction="column" gap="2">
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
        </Flex>
      </MenuPanel>
    </main>
  );
}
