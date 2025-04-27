import { Box } from "@radix-ui/themes";
import { paths } from "@/config/paths";
import { MenuPanel, MenuItem, MainContent } from "@/components";

export default function Home() {
  return (
    <>
      <Box gridRow="1 / 2">
        <MenuPanel>
          <MenuItem href={paths.home.getHref()}>HOME</MenuItem>
          <MenuItem href={paths.music.getHref()}>♪ ♫ ♬</MenuItem>
          <MenuItem href={paths.til.getHref()}>TIL</MenuItem>
          <MenuItem href={paths.contact.getHref()}>CONTACT</MenuItem>
        </MenuPanel>
      </Box>
      <Box gridColumn="2 / 5" gridRow="1 / 5">
        <MainContent title="Home" />
      </Box>
    </>
  );
}
