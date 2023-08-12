import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn/Login";
import SignUp from "../pages/SignUp/Register";
import CustomDrawer from "../pages/HomePage/Drawer";
import BasePage from "../pages/HomePage/Basepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BasePage>
        <h1>Parking82</h1>
      </BasePage>
    ),
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/registrar",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <CustomDrawer />,
  },
]);

export default router;
