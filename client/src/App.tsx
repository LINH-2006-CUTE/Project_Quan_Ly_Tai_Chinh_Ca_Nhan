// // import Dashboard from "./components/forms/admin/Dashboard";
// // import Navbar from "./components/forms/common/Navbar";
// // import Sidebar from "./components/forms/common/Sidebar";

// // import "./App.css";
// import SignUp from "./components/forms/user/SignUp";
// function App() {
//   return (
//     <>
//       {/* <div className="app-layout">
//         <Navbar />
//         <div className="main-layout">
//           <Sidebar />
//           <Dashboard />
//         </div>
//       </div> */}

//       <SignUp />
//     </>
//   );
// }
//////////////////////////////
// import { RouterProvider } from "react-router-dom";
// import routes from "./rounter/RounterUser";
// import SignUp from "./components/forms/user/SignUp";
// import SignIn from "./components/forms/user/SignIn";
// import Home from "./components/forms/user/Home";
import Dashboard from "./components/forms/admin/Dashboard";
import Navbar from "./components/forms/common/Navbar";
import Sidebar from "./components/forms/common/Sidebar";
// import AdminUser from "./components/forms/admin/AdminUser";
import "./App.css";
// import SignInAdmin from "./components/forms/admin/SignInAdmin";
// import AdminLayout from "./components/forms/admin/AdminLayout";
// import { RouterProvider } from "react-router-dom";
// import RounterAdmin from "./rounter/RouterAdmin";
function App() {
  return (
    <>
      {/* <RouterProvider router={routes} /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Home /> */}
      <div className="app-layout">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
      {/* uer admin */}
      {/* <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <AdminUser />
        </div>
      </div> */}

      {/* <SignInAdmin /> */}
      {/* <AdminUser /> */}
      {/* <AdminLayout /> */}
      {/* <RouterProvider router={RounterAdmin} /> */}
    </>
  );
}

export default App;
