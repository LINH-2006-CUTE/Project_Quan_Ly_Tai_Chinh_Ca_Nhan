import { Outlet } from "react-router-dom";
import Navbar from "../../forms/common/Navbar";
import Sidebar from "../../forms/common/Sidebar";
import "../../../css/admin/AdminLayout.css"; // nếu có

export default function AdminLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Outlet /> {/* phần nội dung thay đổi giữa Dashboard / User */}
        </div>
      </div>
    </div>
  );
}
