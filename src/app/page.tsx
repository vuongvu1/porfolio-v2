import { paths } from "@/config/paths";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";
import { AppProvider } from "./provider";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <AppProvider>
        <MenuPanel>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
        </MenuPanel>
        <MainContent title="Home" />
      </AppProvider>
    </div>
  );
}
