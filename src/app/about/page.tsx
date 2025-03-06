import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";
import { paths } from "@/config/paths";

export default function About() {
  return (
    <>
      <MenuPanel>
        <MenuItem href={paths.home.getHref()}>Home</MenuItem>
        <MenuItem href={paths.home.getHref()}>Home</MenuItem>
        <MenuItem href={paths.home.getHref()}>Home</MenuItem>
      </MenuPanel>
      <MainContent title="About" />
    </>
  );
}
