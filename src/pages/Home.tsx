import { Box } from "@mui/material";
import Nav from "../components/Nav";
import Contacts from "../components/Contacts";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Nav />
      <Box sx={{ flexGrow: 1, ml: `52px`, borderRight: "1px solid #EEEE" }}>
        <Contacts />
      </Box>
      <Box sx={{ flexGrow: 8 }}>
        <Chat />
      </Box>
    </Box>
  );
};

export default Home;
