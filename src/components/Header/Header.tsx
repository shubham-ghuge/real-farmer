import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
type HeaderType = {
  isVisible: boolean;
  setFunction: Function;
};

function Header(prop: HeaderType) {
  return (
    <header className="menu">
      <button
        className="btn-c-base"
        onClick={() => {
          prop.setFunction((curr: HeaderType) => !curr);
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16H3V14H21V16ZM21 10H3V8H21V10Z"></path>
        </svg>
      </button>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span className="d-none d-sm-block">real farmer</span>
      </Link>
      <div className="input-addon-base d-none d-sm-block">
        <span className="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <input type="search" placeholder="Explore Quizzes &amp; More" />
      </div>
      <button className="btn-c-base d-block d-sm-none mx-auto">
        <span className="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </button>
      <button>Log in</button>
      <Link to="/" className="cta">
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
    </header>
  );
}
export default Header;
