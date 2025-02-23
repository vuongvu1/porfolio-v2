import { paths } from "@/config/paths";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";
import { Layout } from "@/components/layout";
import { AppProvider } from "@/app/provider";

export default function About() {
  return (
    <Layout>
      <AppProvider>
        <MenuPanel>
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
          <MenuItem href={paths.home.getHref()}>Home</MenuItem>
        </MenuPanel>
        <MainContent title="About" />
      </AppProvider>
    </Layout>
  );
}
