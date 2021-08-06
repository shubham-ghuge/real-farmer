import React, { useEffect, useState } from "react";
import "./form.css";
import "../utils.css";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { Email, Hide, Key, Loader, Show } from "../Icons";
import userLogin, {
  setupTokenToAxiosRequests,
} from "../../services/auth.service";
import { Alert } from "../Alert";
import { AuthFormResponse } from "../../data/quizData.types";
import { Link } from "react-router-dom";

export function logout() {
  localStorage.removeItem("login");
  setupTokenToAxiosRequests(null);
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { setName, loginStatus, setUserLoginStatus } = useAuthContext();

  function demoLoginUser() {
    setEmail("shubhamghuge34@gmail.com");
    setPassword("shubham");
  }

  useEffect(() => {
    loginStatus && navigate("/dashboard");
  }, [loginStatus, navigate]);

  async function loginUser(e?: React.FormEvent) {
    e && e.preventDefault();
    setLoading(true);
    const data: AuthFormResponse = await userLogin(email, password);
    setLoading(false);
    setShowAlert(true);

    if (data.success && "token" in data) {
      data.name && setName(data.name);
      window.localStorage.setItem(
        "login",
        `${JSON.stringify({
          isUserLoggedIn: true,
          token: data.token,
          name: data.name,
          email: email,
        })}`
      );
      if (data.token) setupTokenToAxiosRequests(data.token);
      setUserLoginStatus(true);
    } else {
      if (data.message) return setError(data.message);
    }
  }

  return (
    <>
      {showAlert && (
        <Alert
          type="danger"
          message={error}
          onClose={() => setShowAlert(false)}
        />
      )}
      <form
        onSubmit={(event) => loginUser(event)}
        className="ai-center flex-column"
      >
        <div className="icon-input mb-4">
          <Email />
          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail((currentEmail) => (currentEmail = e.target.value))
            }
            required
          />
        </div>
        <div className="icon-input mb-4">
          <Key />
          <input
            type={hide ? "text" : "password"}
            value={password}
            onChange={(e) =>
              setPassword(
                (currentPassword) => (currentPassword = e.target.value)
              )
            }
            required
          />
          <button type="button" onClick={() => setHide((curr) => !curr)}>
            {hide ? <Hide /> : <Show />}
          </button>
        </div>
        <button type="submit" className="btn-success cta mb-4">
          {loading ? <Loader /> : "Login"}
        </button>
        <p className="text-center mt-4">
          <span>
            <button className="btn-reset link" onClick={demoLoginUser}>
              {loading ? <Loader /> : "demo login"}
            </button>
          </span>
        </p>
      </form>
      <p className="text-center mt-4">
        don't have an account?
        <span>
          <Link to="/register"> Register</Link>
        </span>
      </p>
    </>
  );
}
