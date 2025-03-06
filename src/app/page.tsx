import { Box } from "@radix-ui/themes";
import { paths } from "@/config/paths";
import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";

export default function Home() {
  return (
    <>
      <Box gridRow="1 / 2">
        <MenuPanel>
          <MenuItem href={paths.about.getHref()}>ABOUT</MenuItem>
          <MenuItem href={paths.about.getHref()}>ABOUT</MenuItem>
          <MenuItem href={paths.about.getHref()}>ABOUT</MenuItem>
          <MenuItem href={paths.about.getHref()}>ABOUT</MenuItem>
          <MenuItem href={paths.about.getHref()}>ABOUT</MenuItem>
        </MenuPanel>
      </Box>
      <Box gridColumn="2 / 5" gridRow="1 / 5">
        <MainContent title="Home" />
      </Box>
    </>
  );
}
