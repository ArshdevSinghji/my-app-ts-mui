import { AppBar, Box, Stack, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Search, StyledInputBase } from "./Contacts";

const Chat = () => {
  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          bgcolor: "inherit",
          boxShadow: "none",
          color: "#000",
          borderBottom: "2px solid #eeee",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <AccountCircleOutlinedIcon sx={{ fontSize: "36px" }} />
              <Box>
                <Typography>Travis Barker</Typography>
                <Typography fontSize={12} color="#27AE60">
                  Online
                </Typography>
              </Box>
            </Box>
            <Stack direction={"row"} gap={1}>
              <VideocamOutlinedIcon color="success" />
              <InfoOutlinedIcon />
            </Stack>
          </Stack>
        </Box>
      </AppBar>
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            bottom: "10%",
            right: 10,
            p: 2,
            bgcolor: "#f4f4f4",
            display: "inline-block",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Typography>
            Hi, yes, David have found it, ask our concierge 👀{" "}
          </Typography>
        </Box>
      </Box>
      <Stack
        direction={"row"}
        alignContent={"center"}
        justifyContent={"space-between"}
        gap={2}
        position={"sticky"}
        bottom={0}
      >
        <Stack justifyContent={"center"} p={2}>
          <AttachFileIcon />
        </Stack>
        <Search sx={{ flexGrow: 1, mr: 2, bgcolor: " #fff " }}>
          <StyledInputBase
            placeholder="Type your message here"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Stack justifyContent={"center"} p={2}>
          <Typography color="#27AE60">Send Message</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
