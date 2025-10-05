import "../../css/SignIn.css";
export default function SignIn() {
  return (
    <div className="box-main">
      {/* title */}
      <div className="title">
        <h3 className="title-main">
          Financial <span>Manager</span>
        </h3>
        <p>Please sign in</p>
      </div>

      {/* input */}
      <div className="content-input">
        <input type="text" placeholder="Please enter your username ..." />
        <input type="password" placeholder="Please enter your password ..." />
      </div>

      {/* check box */}
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

      {/* button */}
      <button className="btn-signin">Sign in</button>

      {/* footer */}
      <p className="footer">&#169; 2025 - Rikkei Education</p>
    </div>
  );
}
