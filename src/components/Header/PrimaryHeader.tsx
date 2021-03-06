import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function PrimaryHeader({ show = true }) {
  return (
    <header className={`menu ${show ? "jc-space-between" : "jc-center"}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span className="d-none d-sm-block">real farmer</span>
      </Link>
      {show && (
        <div style={{ height: "100%" }}>
          <Link to="/">Log in</Link>
          <Link to="/register" className="cta">
            Join For free
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
export default PrimaryHeader;
