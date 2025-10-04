import "../../../css/commonCss/Navbar.css";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="navbar-logo">
        Financial <span>Manager</span>
      </h2>
      <div className="navbar-user">
        <FaUserCircle className="user-icon" />
      </div>
    </div>
  );
}
