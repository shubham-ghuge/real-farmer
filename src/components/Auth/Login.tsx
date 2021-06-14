import React, { useState } from "react";
import "./form.css";
import "../utils.css";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { Email, Hide, Key, Loader, Show } from "../Icons";
import userLogin, { FormResponse } from "./auth.service";
import { Alert } from "../Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const { setToken } = useAuthContext();
  let navigate = useNavigate();
  async function loginUser(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data: FormResponse = await userLogin(email, password);
    setLoading(false);
    if (data.success && "token" in data) {
      console.log(data.token);
      setToken(() => data.token);
      return navigate("/dashboard");
    } else {
      return setError(data.message);
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
