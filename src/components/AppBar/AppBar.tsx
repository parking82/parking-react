import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  createTheme,
  Menu,
  MenuItem,
  ThemeProvider,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Notifications,
  AccountCircle,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const appBarTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#910F0A",
          color: "#F3FA2A",
          boxShadow: "none",
        },
      },
    },
  },
});

const CustomAppBar = ({ onDrawerButtonClick, isDrawerOpen }: any) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={appBarTheme}>
      <AppBar position="static" style={{ paddingLeft: isDrawerOpen ? 280 : 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onDrawerButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit" onClick={handleClick}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Button
                onClick={() => {
                  //   logout();
                }}
                color="error"
              >
                Sair
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default CustomAppBar;
