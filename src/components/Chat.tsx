import { AppBar, Box, Divider, Toolbar } from "@mui/material";

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
        <Box sx={{ p: 2 }}>Navbar</Box>
      </AppBar>
    </Box>
  );
};

export default Chat;
