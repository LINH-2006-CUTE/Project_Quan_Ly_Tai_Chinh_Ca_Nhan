import React, { useState } from "react";
import "../../../css/user/signUp.css";
import { useNavigate, Link } from "react-router-dom";

interface User {
  nameUser: string;
  password: string;
}

export default function SignInPage() {
  const [nameUser, setNameUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ nameUser: "", password: "" });
  const [success, setSuccess] = useState(false);

  //router
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { nameUser: "", password: "" };
    let isValid = true;
    setSuccess(false);

    // kiểm tra input
    if (!nameUser) {
      newErrors.nameUser = "Please enter your username ...";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Please enter your password ...";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    // kiểm tra user
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.nameUser === nameUser);
    if (!user) {
      setErrors({ ...newErrors, nameUser: "Username not found!" });
      return;
    }

    // kiểm tra password
    if (user.password !== password) {
      setErrors({ ...newErrors, password: "Password is incorrect!" });
      return;
    }

    // đăng nhập thành công
    setSuccess(true);
    setErrors({ nameUser: "", password: "" });
    localStorage.setItem("currentUser", JSON.stringify(user)); // lưu vào userr
    setNameUser("");
    setPassword("");

    //router

    navigate("/home");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <p className="title">Sign In</p>

        {success && (
          <p
            style={{
              color: "#16a34a",
              fontWeight: "500",
              fontSize: "15px",
              marginBottom: "10px",
            }}
          >
            Sign In Successfully
          </p>
        )}

        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username here ..."
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
              className={errors.nameUser ? "error-input" : ""}
            />
            {errors.nameUser && <p className="error-text">{errors.nameUser}</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password here ..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error-input" : ""}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <button type="submit" className="signup-btn">
            Sign In
          </button>
        </form>

        <p style={{ marginTop: 12 }}>
          Don't have an account?{" "}
          <Link to="/" className="login-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
