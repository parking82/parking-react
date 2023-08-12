import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  createTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../components/MenuItems/MenuItens";

const drawerTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 280,
          background: "#1976D2", // Cor de fundo azul
          flexShrink: 0,
          color: "#FFFFFF", // Cor do texto branco
          borderRightColor: "#1976D2", // Cor da borda azul
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },
  },
});

const DrawerHeader = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 24,
  backgroundColor: "#1976D2", // Cor de fundo azul
});

const NavAvatar = styled(Avatar)(() => ({
  borderColor: "#FFFFFF", // Cor da borda branca
  color: "#FFFFFF", // Cor do ícone branco
  borderRadius: "8px",
  borderStyle: "solid",
  borderWidth: "1px",
  display: "flex",
  height: "40px",
  padding: "4px",
  width: "40px",
  backgroundColor: "transparent",
}));

const MenuIconButton = styled(IconButton)(() => ({
  color: "#FFFFFF", // Cor do ícone branco
  alignSelf: "center",
}));

const DrawerList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const MenuListItem = styled(MenuItem)<{ itemselected: any }>(
  ({ itemselected }) => ({
    borderRadius: 8,
    padding: "6px 16px",
    backgroundColor: itemselected === "true" ? "#0000ee" : "#1976d2", // Cor de fundo azul para itens selecionados
    "&:hover": {
      backgroundColor: "#0000ee",
    },

    span: {
      color: itemselected === "true" ? "white" : "#FFFFFF", // Cor do texto branco
    },

    svg: {
      color: itemselected === "true" ? "white" : "#FFFFFF", // Cor do ícone branco
    },
  })
);

const CustomDrawer = ({ isOpen }: any) => {
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={drawerTheme}>
      <Drawer open={isOpen} variant="persistent">
        <DrawerHeader>
          <NavAvatar></NavAvatar>
          <Grid
            sx={{
              margin: "0px 0px 0px 0px 16px;",
            }}
          >
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Parking82
            </Typography>
            <Typography variant="subtitle2" style={{ color: "white" }}>
              News
            </Typography>
          </Grid>
          <MenuIconButton onClick={handleClick}>
            {anchorEl ? (
              <KeyboardArrowUpIcon
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            ) : (
              <KeyboardArrowDownIcon
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            )}
          </MenuIconButton>
        </DrawerHeader>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Client</MenuItem>
        </Menu>
        <DrawerList>
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
              <MenuListItem
                itemselected={(pathname === item.path).toString()}
                key={index}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </MenuListItem>
            </Link>
          ))}
        </DrawerList>
      </Drawer>
    </ThemeProvider>
  );
};

export default CustomDrawer;
