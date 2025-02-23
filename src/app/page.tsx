"use client";

import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw]",
};

export default function Home() {
  return (
    <main className={classes.main}>
      <MenuPanel>
        <MenuItem href={paths.about.getHref()}>About</MenuItem>
      </MenuPanel>
    </main>
  );
}
