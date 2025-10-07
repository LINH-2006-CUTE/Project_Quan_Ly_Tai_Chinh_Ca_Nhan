import "../../../css/commonCss/Sidebar.css";
import { MdDashboard, MdDisplaySettings, MdLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <MdDashboard className="menu-icon" /> Dashboard
        </li>
        <li>
          <FaUsers className="menu-icon" /> Users
        </li>
        <li>
          <MdDisplaySettings className="menu-icon" /> Category
        </li>
      </ul>
      <div className="signout">
        <MdLogout className="menu-icon" /> Sign out
      </div>
    </div>
  );
}

// import "../../../css/commonCss/Sidebar.css";
// import { MdDashboard, MdDisplaySettings, MdLogout } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <ul className="menu">
//         <li>
//           <Link to="/admin/dashboard" className="menu-link">
//             <MdDashboard className="menu-icon" /> Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/admin/users" className="menu-link">
//             <FaUsers className="menu-icon" /> Users
//           </Link>
//         </li>
//         <li>
//           <MdDisplaySettings className="menu-icon" /> Category
//         </li>
//       </ul>
//       <div className="signout">
//         <MdLogout className="menu-icon" /> Sign out
//       </div>
//     </div>
//   );
// }
