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
import axios from "axios";

export function logout() {
  localStorage.removeItem("login");
  setupTokenToAxiosRequests(null);
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const { setToken } = useAuthContext();
  let navigate = useNavigate();

  function unAuthorizedUser() {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === UNAUTHORIZED) {
          logout();
          return navigate("/");
        }
        return Promise.reject(error);
      }
    );
  }

  useEffect(() => {
    async function checkUserLoggedIn() {
      const { isUserLoggedIn, token } = (await JSON.parse(
        localStorage.getItem("login") as string
      )) ?? { isUserLoggedIn: false, token: "" };
      if (isUserLoggedIn) {
        setToken(() => token);
        setupTokenToAxiosRequests(token);
        return navigate("/dashboard");
      }
      unAuthorizedUser();
    }
    checkUserLoggedIn();
  }, []);

  async function loginUser(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data: AuthFormResponse = await userLogin(email, password);
    setLoading(false);
    if (data.success && "token" in data) {
      setToken(() => data.token);
      window.localStorage.setItem(
        "login",
        `${JSON.stringify({ isUserLoggedIn: true, token: data.token })}`
      );
      if (data.token) setupTokenToAxiosRequests(data.token);
      return navigate("/dashboard");
    } else {
      if (data.message) return setError(data.message);
    }
  }

  return (
    <>
      {error && <Alert type="danger" message={error} />}
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
            {hide ? <Show /> : <Hide />}
          </button>
        </div>
        <button type="submit" className="btn-success cta mb-4">
          {loading ? <Loader /> : "Login"}
        </button>
      </form>
    </>
  );
}
