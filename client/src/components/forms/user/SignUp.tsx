import React, { useState } from "react";
import "../../../css/user/signUp.css";
import usersData from "../../../data/users.json";
import { useNavigate, Link } from "react-router-dom";

interface User {
  nameUser: string;
  password: string;
}

// kiểm tra tài khoản có sẵn k
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(usersData));
}

export default function SignUpPage() {
  // router
  const navigate = useNavigate();

  const [nameUser, setnameUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    nameUser: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { nameUser: "", password: "", confirmPassword: "" };
    let isValid = true;
    setSuccess(false);

    // input
    if (!nameUser) {
      newErrors.nameUser = "Please enter your username ...";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Please enter your password ...";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please enter your confirm password ...";
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Confirm password does not match!";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existedUser = users.find((user: User) => user.nameUser === nameUser);

    if (existedUser) {
      setErrors({ ...newErrors, nameUser: "Username already registered!" });
      return;
    }

    // thêm user
    const newUser = { nameUser, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setnameUser("");
    setPassword("");
    setConfirmPassword("");
    setErrors({ nameUser: "", password: "", confirmPassword: "" });
    setSuccess(true);

    // chuyển hướng
    setTimeout(() => navigate("/signin"), 1000);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <p className="title">Sign Up</p>

        {success && (
          <p
            style={{
              color: "#16a34a",
              fontWeight: "500",
              fontSize: "15px",
              marginBottom: "10px",
            }}
          >
            Sign Up Successfully
          </p>
        )}

        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username here ..."
              value={nameUser}
              onChange={(e) => setnameUser(e.target.value)}
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

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm password here ..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? "error-input" : ""}
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: 12 }}>
          Already have an account?{" "}
          <Link to="/signin" className="login-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
