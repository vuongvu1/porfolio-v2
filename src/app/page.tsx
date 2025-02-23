import { paths } from "@/config/paths";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";
import { AppProvider } from "./provider";

const classes = {
  root: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw]",
};

export default function Home() {
  return (
    <div className={classes.root}>
      <AppProvider>
        <MenuPanel>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
        </MenuPanel>
        <MainContent title="Home" />
      </AppProvider>
    </div>
  );
}
