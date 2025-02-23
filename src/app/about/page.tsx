import { paths } from "@/config/paths";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";
import { AppProvider } from "@/app/provider";

export default function About() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <AppProvider>
        <MenuPanel>
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
        </MenuPanel>
        <MainContent title="About" />
      </AppProvider>
    </div>
  );
}
