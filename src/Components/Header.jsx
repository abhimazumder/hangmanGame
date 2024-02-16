import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const naviagte = useNavigate();

  const handleOnClick = () => naviagte("/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          background: "linear-gradient(45deg, #030007, #14051A)",
          backdropFilter: "blur(30px)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Toolbar>
          <SmartToyIcon
            fontSize="large"
            style={{ margin: "5px", cursor:"pointer" }}
            onClick={() => handleOnClick()}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Hangman Game
          </Typography>
          <GitHubIcon style={{ color: "white", cursor: "pointer" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
