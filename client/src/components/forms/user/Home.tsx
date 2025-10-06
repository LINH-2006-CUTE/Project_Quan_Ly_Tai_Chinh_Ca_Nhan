// import { useState } from "react";
// import "../../../css/user/home.css";
// import { LuNotebook } from "react-icons/lu";
// import { FaAngleDown } from "react-icons/fa";
// import { GoGoal } from "react-icons/go";
// import { FaChartBar } from "react-icons/fa";
// import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// export default function HomePage() {
//   const [budget, setBudget] = useState("");
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   return (
//     <div className="home-page">
//       {/* Header */}
//       <header className="header">
//         <div className="header-left">
//           <LuNotebook /> Tài chính cá nhân
//         </div>
//         <div className="header-right">
//           <span
//             className="cursor-pointer flex items-center gap-1"
//             onClick={() => setShowLogoutModal(true)}
//           >
//             Tài khoản <FaAngleDown />
//           </span>
//         </div>
//       </header>

//       <div className="container">
//         {/* Sidebar */}
//         <aside className="sidebar">
//           <button>Information</button>
//           <button>Category</button>
//           <button>History</button>
//         </aside>

//         {/* Main Content */}
//         <main className="main-content">
//           <div className="card smart-budget">
//             <GoGoal /> Kiểm soát chi tiêu thông minh
//             <p>Theo dõi ngân sách và thu chi hằng tháng dễ dàng</p>
//           </div>

//           <h2>
//             <FaChartBar /> Quản Lý Tài Chính Cá Nhân
//           </h2>

//           <div className="card">
//             Số tiền còn lại: <span>0 VND</span>
//           </div>

//           <div className="card">
//             <label>Chọn tháng: </label>
//             <input type="month" />
//           </div>

//           <div className="card">
//             <label>Ngân sách tháng: </label>
//             <input
//               type="number"
//               placeholder="VD: 5000000"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//             />
//             <button>Lưu</button>
//           </div>

//           {/* Personal Form */}
//           <div className="card personal-info">
//             <h3>Quản Lý Thông tin cá nhân</h3>
//             <form>
//               <div className="form-row">
//                 <input type="text" placeholder="Name" />
//                 <input type="email" placeholder="Email" />
//               </div>
//               <div className="form-row">
//                 <input type="text" placeholder="Phone" />
//                 <input type="text" placeholder="Gender" />
//               </div>
//               <div className="form-row">
//                 <button type="button">Change Information</button>
//                 <button type="button">Change Password</button>
//               </div>
//             </form>
//           </div>
//         </main>
//       </div>
//       {/* modal */}
//       <Dialog
//         open={showLogoutModal}
//         onClose={setShowLogoutModal}
//         className="relative z-50"
//       >
//         <div className="fixed inset-0 bg-black bg-opacity-50" />

//         <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <DialogPanel
//               transition
//               className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
//             >
//               <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
//                     <ExclamationTriangleIcon
//                       aria-hidden="true"
//                       className="size-6 text-red-400"
//                     />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <DialogTitle
//                       as="h3"
//                       className="text-base font-semibold text-white"
//                     >
//                       Đăng xuất khỏi tài khoản?
//                     </DialogTitle>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-400">
//                         Bạn có chắc chắn muốn đăng xuất không? Hành động này sẽ
//                         đưa bạn về trang đăng nhập.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowLogoutModal(false);
//                     alert("Đăng xuất thành công");
//                   }}
//                   className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
//                 >
//                   Đăng xuất
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowLogoutModal(false)}
//                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
//                 >
//                   Hủy
//                 </button>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// }
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
