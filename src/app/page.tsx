import { paths } from "@/config/paths";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";

export default function Home() {
  return (
    <>
      <MenuPanel>
        <MenuItem href={paths.about.getHref()}>About</MenuItem>
        <MenuItem href={paths.about.getHref()}>About</MenuItem>
        <MenuItem href={paths.about.getHref()}>About</MenuItem>
        <MenuItem href={paths.about.getHref()}>About</MenuItem>
        <MenuItem href={paths.about.getHref()}>About</MenuItem>
      </MenuPanel>
      <MainContent title="Home" />
    </>
  );
}
