import { useState } from "react";
import "../../../css/user/home.css";
//icons
import { LuNotebook } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { FaChartBar } from "react-icons/fa";
//antd
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [budget, setBudget] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setShowLogoutModal(false);
    alert("Đăng xuất thành công");
    // chuyển sang trang đăng nhập
    navigate("/signin");
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <LuNotebook /> Tài chính cá nhân
        </div>
        <div className="header-right">
          <span
            className="cursor-pointer flex items-center gap-1"
            onClick={() => setShowLogoutModal(true)}
          >
            Tài khoản <FaAngleDown />
          </span>
        </div>
      </header>

      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <button>Information</button>
          <button>Category</button>
          <button>History</button>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="card smart-budget">
            <GoGoal /> Kiểm soát chi tiêu thông minh
            <p>Theo dõi ngân sách và thu chi hằng tháng dễ dàng</p>
          </div>

          <h2>
            <FaChartBar /> Quản Lý Tài Chính Cá Nhân
          </h2>

          <div className="card">
            Số tiền còn lại: <span>0 VND</span>
          </div>

          <div className="card">
            <label>Chọn tháng: </label>
            <input type="month" />
          </div>

          <div className="card">
            <label>Ngân sách tháng: </label>
            <input
              type="number"
              placeholder="VD: 5000000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <button>Lưu</button>
          </div>

          {/* Personal Form */}
          <div className="card personal-info">
            <h3>Quản Lý Thông tin cá nhân</h3>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Gender" />
              </div>
              <div className="form-row">
                <button type="button">Change Information</button>
                <button type="button">Change Password</button>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* Modal*/}
      <Modal
        title="Đăng xuất khỏi tài khoản?"
        open={showLogoutModal}
        onOk={handleLogout}
        onCancel={() => setShowLogoutModal(false)}
        okText="Đăng xuất"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <p>Bạn có chắc chắn muốn đăng xuất không?</p>
      </Modal>
    </div>
  );
}
