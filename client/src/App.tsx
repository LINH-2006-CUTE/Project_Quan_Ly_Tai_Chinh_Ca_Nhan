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

import { RouterProvider } from "react-router-dom";
import routes from "./rounter/Rounter";
// import SignUp from "./components/forms/user/SignUp";
// import SignIn from "./components/forms/user/SignIn";
// import Home from "./components/forms/user/Home";
function App() {
  return (
    <>
      <RouterProvider router={routes} />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
