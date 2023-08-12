import { useState } from "react";
import CustomAppBar from "../../components/AppBar/AppBar";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material";
import CustomDrawer from "./Drawer";
import { createTheme } from "../../theme";

const PageWrapper = styled.div(() => ({}));

const MainContent = styled.main(() => ({
  flexGrow: 1,
  padding: "24px",
  marginTop: "0px",
  backgroundColor: "white",
}));

const BasePage = ({ children }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <CustomDrawer isOpen={drawerOpen} />
        <CustomAppBar
          onDrawerButtonClick={toggleDrawer}
          isDrawerOpen={drawerOpen}
        />
        <MainContent
          style={{
            marginLeft: drawerOpen ? "280px" : 0,
          }}
        >
          <div>{children}</div>
        </MainContent>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default BasePage;
