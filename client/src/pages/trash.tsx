// //signin
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../css/SignIn.css";

// export default function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const savedAccount = localStorage.getItem("account");
//     if (!savedAccount) {
//       setError("Chưa có tài khoản, vui lòng đăng ký!");
//       return;
//     }

//     const account = JSON.parse(savedAccount);
//     if (
//       account.email === formData.email &&
//       account.password === formData.password
//     ) {
//       alert("Đăng nhập thành công!");
//       navigate("/"); // điều hướng sang trang chính
//     } else {
//       setError("Sai email hoặc mật khẩu!");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="container-main">
//         <h3>Sign In</h3>
//         <form className="container_box" onSubmit={handleSubmit}>
//           <div className="div-input">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email..."
//               className={error ? "error-border" : ""}
//             />
//           </div>

//           <div className="div-input">
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password..."
//               className={error ? "error-border" : ""}
//             />
//           </div>

//           {error && <div className="error-message">{error}</div>}

//           <div className="btn-submit">
//             <button type="submit">Sign In</button>
//           </div>

//           <div className="btn-footer">
//             <p>Chưa có tài khoản?</p>
//             <span>
//               <a href="/signup">Đăng ký</a>
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// sign up

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/SignUp.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // kiểm tra tên
    if (!formData.firstName)
      newErrors.firstName = "Vui lòng nhập họ và tên đệm!";
    if (!formData.name) newErrors.name = "Vui lòng nhập tên!";

    // kiểm tra email
    if (!formData.email.includes("@"))
      newErrors.email = "Vui lòng nhập email hợp lệ!";

    // kiểm tra mật khẩu
    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
    }

    // kiểm tra mật khẩu khớp
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu không khớp!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("account", JSON.stringify(formData));
      alert("Đăng ký thành công!");
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="conatainer-main">
        <h3>Sign Up</h3>
        <form className="container_box" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="div-input">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name here ..."
              className={errors.firstName ? "error-border" : ""}
            />
          </div>
          {errors.firstName && (
            <div className="error-message">{errors.firstName}</div>
          )}

          {/* Email */}
          <div className="div-input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@abcxyz.com"
              className={errors.email ? "error-border" : ""}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          {/* Password */}
          <div className="div-input">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password here ..."
              className={errors.password ? "error-border" : ""}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          {/* Confirm Password */}
          <div className="div-input">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password here ..."
              className={errors.confirmPassword ? "error-border" : ""}
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>
          {/* Submit Button */}
          <div className="btn-submit">
            <button type="submit">Sign Up</button>
          </div>
          {/* Footer */}
          <div className="btn-footer">
            <p>You have an account?</p>
            <span>
              <a href="/login">Đăng nhập</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
