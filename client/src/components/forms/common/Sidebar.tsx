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
