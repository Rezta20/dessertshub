import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Header Component
const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          <Button
            style={{ backgroundColor: "transparent" }}
            onClick={() => handleNavigate("/")}
          >
            {" "}
            DessertsHub
          </Button>
        </Typography>

        <Button
          style={{ backgroundColor: "transparent" }}
          onClick={() => handleNavigate("/store")}
        >
          店家
        </Button>
        <Button
          style={{ backgroundColor: "transparent" }}
          onClick={() => handleNavigate("/social")}
        >
          社群
        </Button>
        <Button
          style={{ backgroundColor: "transparent" }}
          onClick={() => handleNavigate("/member")}
        >
          會員專區
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
