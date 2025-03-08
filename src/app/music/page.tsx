import { Box } from "@radix-ui/themes";

import { MenuPanel, MenuItem } from "@/components/menu-panel";
import { MainContent } from "@/components/main-content";
import { paths } from "@/config/paths";

export default function About() {
  return (
    <>
      <Box gridRow="1 / 2">
        <MenuPanel>
          <MenuItem href={paths.home.getHref()}>HOME</MenuItem>
          <MenuItem href={paths.home.getHref()} variant="secondary">
            ↵ BACK
          </MenuItem>
        </MenuPanel>
      </Box>
      <Box gridColumn="2 / 5" gridRow="1 / 5">
        <MainContent title="MUSIC" />
      </Box>
    </>
  );
}
