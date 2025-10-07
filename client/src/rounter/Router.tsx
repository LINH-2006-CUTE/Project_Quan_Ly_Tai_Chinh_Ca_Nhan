import { createBrowserRouter } from "react-router-dom";
import SignInAdmin from "../components/forms/admin/SignInAdmin";
import AdminLayout from "../components/forms/admin/AdminLayout";
import Dashboard from "../components/forms/admin/Dashboard";
import AdminUser from "../components/forms/admin/AdminUser";
// import SignUp from "../components/forms/user/SignUp";
// import SignIn from "../components/forms/user/SignIn";
// import Home from "../components/forms/user/Home";

export const router = createBrowserRouter([
  //User
  // { path: "/", element: <Home /> },
  // { path: "/signin", element: <SignIn /> },
  // { path: "/signup", element: <SignUp /> },
  //Admin
  { path: "/admin/signin", element: <SignInAdmin /> },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <AdminUser /> },
    ],
  },
]);
