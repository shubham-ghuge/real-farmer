import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Close, User } from "../Icons";
import Search from "../Search";
import { UserInfo } from "../UserInfo";

function Header() {
  const { quizId } = useParams();
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  if (quizId) {
    return null;
  }
  return (
    <>
      <header className="menu">
        <Link to="/dashboard" className="logo">
          <img src={logo} alt="logo" />
          <span className="d-sm-block d-none">real farmer</span>
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
          <input
            type="search"
            onFocus={() => setShowSearch(true)}
            placeholder="Explore Quizzes &amp; More"
          />
        </div>
        <button
          className="d-block d-sm-none btn-c-base mt-2"
          onClick={() => setShowSearch(true)}
        >
          <svg width="1em" className="fsz-3" height="1em" viewBox="0 0 24 24" fill="none">
            <path
              d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <Link to="/certificates" className="mr-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
          certificates
        </Link>
        <button
          onClick={() => setShowUserInfo((curr) => !curr)}
          className="account btn-reset mr-4"
        >
          <>{showUserInfo ? <Close /> : <User />}</>
        </button>
        {showUserInfo && <UserInfo />}
      </header>
      {showSearch && <Search onClose={() => setShowSearch(false)} />}
    </>
  );
}
export default Header;
