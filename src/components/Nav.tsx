import { Box, Divider, Drawer, Stack } from "@mui/material";
import AnimationIcon from "@mui/icons-material/Animation";
import Person2Icon from "@mui/icons-material/Person2";
import LanguageIcon from "@mui/icons-material/Language";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Nav = () => {
  return (
    <Drawer variant="permanent">
      <Stack width={54} alignItems={"center"} sx={{ height: "100vw" }}>
        <Stack mt={2} spacing={2}>
          <AnimationIcon sx={{ fontSize: 32 }} color="success" />
          <Person2Icon sx={{ fontSize: 32 }} />
        </Stack>
        <Divider variant="middle" sx={{ my: 2, width: "80%" }} />
        <Stack alignItems={"center"}>
          <Box sx={{ p: 1.5 }}>
            <LanguageIcon sx={{ fontSize: 18 }} color="success" />
          </Box>
          <Box sx={{ p: 1.5, bgcolor: "#27AE60", borderRadius: 16 }}>
            <MessageOutlinedIcon sx={{ fontSize: 18, color: "#fff" }} />
          </Box>
          <Box sx={{ p: 1.5 }}>
            <VideocamOutlinedIcon sx={{ fontSize: 18 }} color="success" />
          </Box>
          <Box sx={{ p: 1.5 }}>
            <LibraryMusicOutlinedIcon sx={{ fontSize: 18 }} color="success" />
          </Box>
          <Box sx={{ p: 1.5 }}>
            <CalendarMonthOutlinedIcon sx={{ fontSize: 18 }} color="success" />
          </Box>
        </Stack>
        <Stack spacing={2} flexGrow={1} justifyContent={"flex-end"} pb={2}>
          <SettingsOutlinedIcon />
          <LogoutOutlinedIcon />
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default Nav;
