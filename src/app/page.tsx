import { paths } from "@/config/paths";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";
import { Layout } from "@/components/layout";
import { AppProvider } from "./provider";

export default function Home() {
  return (
    <Layout>
      <AppProvider>
        <MenuPanel>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
          <MenuItem href={paths.about.getHref()}>About</MenuItem>
        </MenuPanel>
        <MainContent title="Home" />
      </AppProvider>
    </Layout>
  );
}
