import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { AppProvider } from "@/app/provider";
import { paths } from "@/config/paths";

const classes = {
  main: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw]",
};

export default function About() {
  return (
    <main className={classes.main}>
      <AppProvider>
        <MenuPanel>
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
        </MenuPanel>
      </AppProvider>
    </main>
  );
}
