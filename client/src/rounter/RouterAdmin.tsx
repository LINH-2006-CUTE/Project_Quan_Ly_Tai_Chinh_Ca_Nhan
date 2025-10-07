// // import { createBrowserRouter } from "react-router-dom";
// // import Dashboard from "../components/forms/admin/Dashboard";
// // import Navbar from "../components/forms/common/Navbar";
// // import Sidebar from "../components/forms/common/Sidebar";

// // const RounterAdmin = createBrowserRouter([
// //   {
// //     path: "/admin",
// //     element: (
// //       <div className="app-layout">
// //         <Navbar />
// //         <div className="main-layout">
// //           <Sidebar />
// //           <Dashboard />
// //         </div>
// //       </div>
// //     ),
// //   },
// // ]);

// // export default RounterAdmin;

// import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../components/forms/admin/Dashboard";
// import AdminUser from "../components/forms/admin/AdminUser";
// import Navbar from "../components/forms/common/Navbar";
// import Sidebar from "../components/forms/common/Sidebar";

// const RounterAdmin = createBrowserRouter([
//   {
//     path: "/admin",
//     element: (
//       <div className="app-layout">
//         <Navbar />
//         <div className="main-layout">
//           <Sidebar />
//         </div>
//       </div>
//     ),
//     children: [
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "users",
//         element: <AdminUser />,
//       },
//     ],
//   },
// ]);

// export default RounterAdmin;

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/forms/admin/Dashboard";
import AdminUser from "../components/forms/admin/AdminUser";
import Navbar from "../components/forms/common/Navbar";
import Sidebar from "../components/forms/common/Sidebar";

const RounterAdmin = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <div className="app-layout">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <AdminUser />,
      },
    ],
  },
]);

export default RounterAdmin;
