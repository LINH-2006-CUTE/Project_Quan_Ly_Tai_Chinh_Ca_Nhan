// import { useState, useEffect } from "react";
// import "../../../css/admin/SignInAdmin.css";

// export default function SignIn() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const adminAccount = {
//       username: "admin",
//       password: "123456",
//       role: "admin",
//       name: "Administrator",
//     };

//     const admins = JSON.parse(localStorage.getItem("admins") || "[]");
//     const exist = admins.some((a: any) => a.username === "admin");

//     if (!exist) {
//       admins.push(adminAccount);
//       localStorage.setItem("admins", JSON.stringify(admins));
//     }
//   }, []);

//   const handleSignIn = () => {
//     const admins = JSON.parse(localStorage.getItem("admins") || "[]");

//     const foundAdmin = admins.find(
//       (a: any) => a.username === username && a.password === password
//     );

//     if (!username || !password) {
//       setError("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
//     } else if (!foundAdmin) {
//       setError("Tài khoản hoặc mật khẩu không đúng!");
//     } else {
//       setError("");
//       localStorage.setItem("currentAdmin", JSON.stringify(foundAdmin));
//       alert("Đăng nhập thành công ✅");
//       // 👉 sau này chuyển hướng đến /admin/dashboard
//     }
//   };

//   return (
//     <div className="box-main">
//       {/* title */}
//       <div className="title">
//         <h3 className="title-main">
//           Financial <span>Manager</span>
//         </h3>
//         <p>Please sign in</p>
//       </div>

//       {/* input */}
//       <div className="content-input">
//         <input
//           type="text"
//           placeholder="Please enter your username ..."
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Please enter your password ..."
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       {/* Hiển thị lỗi */}
//       {error && <p className="error-text">{error}</p>}

//       {/* check box */}
//       <div className="remember">
//         <div>
//           <input type="checkbox" id="remember" />
//           <label htmlFor="remember">Remember me</label>
//         </div>
//         <div className="register">
//           Don’t have an account,&nbsp;
//           <a href="#">click here !</a>
//         </div>
//       </div>

//       {/* button */}
//       <button className="btn-signin" onClick={handleSignIn}>
//         Sign in
//       </button>

//       {/* footer */}
//       <p className="footer">&#169; 2025 - Rikkei Education</p>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import "../../../css/admin/SignInAdmin.css";
// import { useNavigate } from "react-router-dom";

export default function SignInAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    // tài khoản admin sẵn
    const defaultAdmin = {
      username: "admin",
      password: "123456",
      isBlocked: false,
    };

    const admins = JSON.parse(localStorage.getItem("admins") || "[]");
    const exist = admins.some((a: any) => a.username === "admin");

    if (!exist) {
      admins.push(defaultAdmin);
      localStorage.setItem("admins", JSON.stringify(admins));
    }
  }, []);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setErrorUsername("");
    setErrorPassword("");
    //  admin từ localStorage
    const admins = JSON.parse(localStorage.getItem("admins") || "[]");
    const foundAdmin = admins.find((a: any) => a.username === username);

    if (!username) {
      setErrorUsername("Please enter your username");
      return;
    }
    if (!password) {
      setErrorPassword("Please enter your password");
      return;
    }

    if (username === "admin" && password === "123456") {
      localStorage.setItem("currentAdmin", username);
      // navigate("/admin/dashboard"); //dashboard
    } else {
      setError("Incorrect username or password!");
    }
    // Kiểm tra nếu tài khoản đã bị khóa
    if (foundAdmin.isBlocked) {
      setError("Your account is blocked! Please contact admin.");
      return;
    }

    // Kiểm tra mật khẩu
    if (foundAdmin.password !== password) {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= 3) {
        // Sau 3 lần sai -> khóa tài khoản
        foundAdmin.isBlocked = true;
        localStorage.setItem("admins", JSON.stringify(admins));
        setError("Your account blocked!, Please contact admin");
      } else {
        setError("Incorrect account or password!");
      }
      return;
    }

    setError("");
    localStorage.setItem("currentAdmin", JSON.stringify(foundAdmin));
    alert("Sign in successfully");

    // sang trang admin chính
    // navigate("/admin/dashboard");
  };

  return (
    <div className="box-main">
      {/* title */}
      <div className="title">
        <h3 className="title-main">
          Financial <span>Manager</span>
        </h3>
        <p>Please sign in</p>
      </div>

      {/* error */}
      {error && (
        <p
          style={{
            color: "red",
            marginBottom: "10px",
            fontWeight: "500",
          }}
        >
          {error}
        </p>
      )}

      {/* input */}
      <div className="content-input">
        <div className="input-group">
          <input
            type="text"
            placeholder="Please enter your username ..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={errorUsername ? "error-input" : ""}
          />
          {errorUsername && <p className="error-text">{errorUsername}</p>}
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Please enter your password ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errorPassword ? "error-input" : ""}
          />
          {errorPassword && <p className="error-text">{errorPassword}</p>}
        </div>
      </div>

      {/* checkbox */}
      <div className="remember">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="register">
          Don’t have an account,&nbsp;
          <a href="#">click here !</a>
        </div>
      </div>

      <button className="btn-signin" onClick={handleSignIn}>
        Sign in
      </button>

      <p className="footer">&#169; 2025 - Rikkei Education</p>
    </div>
  );
}
