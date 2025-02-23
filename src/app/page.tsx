import { MenuPanel, MenuItem, MenuProvider } from "@/components/menu-panel";
import { paths } from "@/config/paths";

const classes = {
  root: "font-[family-name:var(--font-ubuntu-mono)] h-[100vh] w-[100vw]",
};

export default function Home() {
  return (
    <div className={classes.root}>
      <MenuProvider>
        <MenuPanel>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
        </MenuPanel>
      </MenuProvider>
    </div>
  );
}
