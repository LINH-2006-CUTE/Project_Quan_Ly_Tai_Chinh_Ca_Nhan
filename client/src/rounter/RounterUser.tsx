import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/forms/user/SignUp";
import SignIn from "../components/forms/user/SignIn";
import Home from "../components/forms/user/Home";
const routes = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>404 - Trang không tồn tại</div>,
  },
]);

export default routes;
