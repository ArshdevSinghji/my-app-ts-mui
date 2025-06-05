import { Box, InputBase, Stack, styled, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: 12,
  background: "#EEEEEE",
  margin: "10px 0",
}));

export const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: 12,
}));

export const StyledInputBase = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    padding: 10,
    marginLeft: 34,
  },
}));

interface IContacts {
  username: string;
  sentence: string;
}

interface IContactsArr {
  contacts: IContacts[];
}

const contactsList: IContactsArr = {
  contacts: [
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
    {
      username: "John Doe",
      sentence: "How are you doing?",
    },
  ],
};

const Contacts = () => {
  return (
    <Box>
      <Box sx={{ px: 2 }}>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "bold",
            mt: 2,
          }}
        >
          Messages
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ width: 20, height: 20, color: "#676767" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Typography sx={{ fontSize: 12 }}>
          Sort By&nbsp;
          <Typography component="span" sx={{ color: "#2D9CDB", fontSize: 12 }}>
            Newest
          </Typography>
        </Typography>
      </Box>
      <Stack spacing={2} px={2} mt={1}>
        {contactsList.contacts.map((item) => {
          return (
            <Box
              //   tabIndex={0}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                // "&:focus": {
                //   bgcolor: "#b2b2b2",
                // },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <AccountCircleOutlinedIcon />
              <Box py={1}>
                <Typography>{item.username}</Typography>
                <Typography sx={{ fontSize: 12 }}>{item.sentence}</Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Contacts;
