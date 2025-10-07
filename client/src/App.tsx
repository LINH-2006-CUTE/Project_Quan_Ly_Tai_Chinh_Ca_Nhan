// import { RouterProvider } from "react-router-dom";
// import routes from "./rounter/RounterUser";
// import SignUp from "./components/forms/user/SignUp";
// import SignIn from "./components/forms/user/SignIn";
// import Home from "./components/forms/user/Home";
// // /
// import AdminUser from "./components/forms/admin/AdminUser";
// import "./App.css";
// import SignInAdmin from "./components/forms/admin/SignInAdmin";
// import AdminLayout from "./components/forms/admin/AdminLayout";
// import RounterAdmin from "./rounter/RouterAdmin";
// function App() {
//   return (
//     <>
//       <RouterProvider router={routes} />
//       <SignUp />
//       <SignIn />
//       <Home />
//       <div className="app-layout">
//         <Navbar />
//         <div className="main-layout">
//           <Sidebar />
//           <Dashboard />
//         </div>
//       </div>
//       {/* uer admin */}
//       <div>
//         <Navbar />
//         <div style={{ display: "flex" }}>
//           <Sidebar />
//           <AdminUser />
//         </div>
//       </div>

//       <SignInAdmin />
//       <AdminUser />
//       <AdminLayout />
//       <RouterProvider router={RounterAdmin} />
//     </>
//   );
// }
import { RouterProvider } from "react-router-dom";
import { router } from "./rounter/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
