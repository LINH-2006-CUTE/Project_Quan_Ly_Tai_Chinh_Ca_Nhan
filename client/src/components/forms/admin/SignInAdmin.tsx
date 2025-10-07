import { useState, useEffect } from "react";
import "../../../css/admin/SignInAdmin.css";
import { useNavigate } from "react-router-dom";

export default function SignInAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");
  // const [loginAttempts, setLoginAttempts] = useState(0);
  const navigate = useNavigate();

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
      navigate("/admin/dashboard"); //dashboard
    } else {
      setError("Incorrect username or password!");
    }
    // Kiểm tra nếu tài khoản đã bị khóa
    if (foundAdmin.isBlocked) {
      setError("Your account is blocked! Please contact admin.");
      return;
    }

    setError("");
    localStorage.setItem("currentAdmin", JSON.stringify(foundAdmin));
    alert("Sign in successfully");

    // sang trang admin uer
    navigate("/admin/adminuser");
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
