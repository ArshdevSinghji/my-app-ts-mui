import { AppBar, Box, Stack, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Chat = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
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
              <AccountCircleOutlinedIcon />
              <Box>
                <Typography>Travis Barker</Typography>
                <Typography fontSize={12}>Online</Typography>
              </Box>
            </Box>
            <Stack direction={"row"} gap={1}>
              <VideocamOutlinedIcon color="success" />
              <InfoOutlinedIcon />
            </Stack>
          </Stack>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Chat;
