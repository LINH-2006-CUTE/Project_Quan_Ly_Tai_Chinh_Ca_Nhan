// import "../../../css/admin/adminUser.css";
// import { FaSearch, FaLock } from "react-icons/fa";

// export default function UsersPage() {
//   const users = [
//     {
//       id: 1,
//       name: "Nguyễn Văn A",
//       email: "nguyenvana@gmail.com",
//       phone: "0987654321",
//       gender: "Female",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "Phạm Thị B",
//       email: "phamthib@gmail.com",
//       phone: "0987654321",
//       gender: "Male",
//       status: "Deactivate",
//     },
//     {
//       id: 3,
//       name: "Trần Minh C",
//       email: "tranminhc@gmail.com",
//       phone: "0987654321",
//       gender: "Male",
//       status: "Active",
//     },
//     {
//       id: 4,
//       name: "Nguyễn Duy D",
//       email: "nguyenduyd@gmail.com",
//       phone: "0987654321",
//       gender: "Female",
//       status: "Deactivate",
//     },
//     {
//       id: 5,
//       name: "Nguyễn Quang E",
//       email: "nguyenquange@gmail.com",
//       phone: "0987654321",
//       gender: "Female",
//       status: "Active",
//     },
//     {
//       id: 6,
//       name: "Ngô Văn F",
//       email: "ngovanf@gmail.com",
//       phone: "0987654321",
//       gender: "Male",
//       status: "Deactivate",
//     },
//     {
//       id: 7,
//       name: "Hồ Xuân G",
//       email: "hoxuang@gmail.com",
//       phone: "0987654321",
//       gender: "Male",
//       status: "Deactivate",
//     },
//     {
//       id: 8,
//       name: "Trịnh Quốc K",
//       email: "trinhquock@gmail.com",
//       phone: "0987654321",
//       gender: "Male",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="users-page">
//       <div className="users-header">
//         <h3>Users</h3>
//         <div className="search-box">
//           <input type="text" placeholder="Search here..." />
//           <FaSearch className="search-icon" />
//         </div>
//       </div>

//       <table className="users-table">
//         <thead>
//           <tr>
//             <th>STT</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Gender</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u, i) => (
//             <tr key={u.id}>
//               <td>{i + 1}</td>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//               <td>{u.phone}</td>
//               <td>{u.gender}</td>
//               <td>
//                 <span
//                   className={
//                     u.status === "Active" ? "status-active" : "status-inactive"
//                   }
//                 >
//                   {u.status}
//                 </span>
//               </td>
//               <td>
//                 <FaLock
//                   className={u.status === "Active" ? "lock-green" : "lock-red"}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <button>&lt;</button>
//         {[1, 2, 3, 4, 5, 6, 7].map((p) => (
//           <button key={p} className={p === 3 ? "active" : ""}>
//             {p}
//           </button>
//         ))}
//         <button>&gt;</button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Table, Tag } from "antd";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import "../../../css/admin/adminUser.css";

function AdminUser() {
  const defaultUsers = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      phone: "0987654321",
      gender: "Female",
      status: "Active",
    },
    {
      id: 2,
      name: "Phạm Thị B",
      email: "phamthib@gmail.com",
      phone: "0987654321",
      gender: "Male",
      status: "Deactivate",
    },
    {
      id: 3,
      name: "Trần Minh C",
      email: "tranminhc@gmail.com",
      phone: "0987654321",
      gender: "Male",
      status: "Active",
    },
    {
      id: 4,
      name: "Nguyễn Duy D",
      email: "nguyenduyd@gmail.com",
      phone: "0987654321",
      gender: "Female",
      status: "Deactivate",
    },
    {
      id: 5,
      name: "Nguyễn Quang E",
      email: "nguyenquange@gmail.com",
      phone: "0987654321",
      gender: "Male",
      status: "Active",
    },
    {
      id: 6,
      name: "Ngô Văn F",
      email: "ngovanf@gmail.com",
      phone: "0987654321",
      gender: "Female",
      status: "Deactivate",
    },
    {
      id: 7,
      name: "Hồ Xuân G",
      email: "hoxuang@gmail.com",
      phone: "0987654321",
      gender: "Female",
      status: "Deactivate",
    },
    {
      id: 8,
      name: "Trịnh Quốc K",
      email: "trinhquock@gmail.com",
      phone: "0987654321",
      gender: "Male",
      status: "Active",
    },
    {
      id: 9,
      name: "Lê Nhật Linh",
      email: "lnh@gmail.com",
      phone: "0987654321",
      gender: "Female",
      status: "Active",
    },
  ];

  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  if (
    currentUser &&
    !storedUsers.some((u: any) => u.nameUser === currentUser.nameUser)
  ) {
    storedUsers.push(currentUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
  }

  const normalizedStored = storedUsers.map((u: any, index: number) => ({
    id: index + 100,
    name: u.nameUser || "Unknown",
    email: u.email || "—",
    phone: u.phone || "—",
    gender: u.gender || "—",
    status: u.status || "Active",
  }));

  const allUsers = [...defaultUsers, ...normalizedStored];
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users_admin") || "[]").length > 0
      ? JSON.parse(localStorage.getItem("users_admin") || "[]")
      : allUsers
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  // Lọc theo tên
  const filteredUsers = users.filter(
    (uer: any) =>
      uer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // đổi trạng thái
  const toggleStatus = (id: number) => {
    const updated = users.map((user: any) =>
      user.id === id
        ? {
            ...user,
            status: user.status === "Active" ? "Deactivate" : "Active",
          }
        : user
    );
    setUsers(updated);
    localStorage.setItem("users_admin", JSON.stringify(updated));
  };

  const columns = [
    {
      title: "STT",
      key: "stt",
      render: (_: any, __: any, index: number) =>
        (currentPage - 1) * pageSize + index + 1,
      width: "6%",
    },
    { title: "Name", dataIndex: "name", key: "name", width: "18%" },
    { title: "Email", dataIndex: "email", key: "email", width: "20%" },
    { title: "Phone", dataIndex: "phone", key: "phone", width: "15%" },
    { title: "Gender", dataIndex: "gender", key: "gender", width: "10%" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "12%",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: "10%",
      render: (_: any, record: any) =>
        record.status === "Active" ? (
          <CiLock
            color="green"
            style={{ cursor: "pointer", fontSize: "18px" }}
            onClick={() => toggleStatus(record.id)}
            title="Khóa người dùng"
          />
        ) : (
          <CiUnlock
            color="red"
            style={{ cursor: "pointer", fontSize: "18px" }}
            onClick={() => toggleStatus(record.id)}
            title="Mở khóa người dùng"
          />
        ),
    },
  ];

  return (
    <div className="users-page">
      <div className="users-header">
        <h3>Users</h3>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiUnlock className="search-icon" />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filteredUsers}
        pagination={{
          current: currentPage,
          pageSize,
          total: filteredUsers.length,
          onChange: (page) => setCurrentPage(page),
          showSizeChanger: false,
        }}
        bordered
        rowKey="id"
      />
    </div>
  );
}

export default AdminUser;
