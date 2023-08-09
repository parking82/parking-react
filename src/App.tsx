import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn/Login";
import SignUp from "./pages/SignUp/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/registrar",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
