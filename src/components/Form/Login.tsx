import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import userLogin, { FormResponse } from "./register.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    <form
      onSubmit={(event) => loginUser(event)}
      className="ai-center flex-column"
    >
      {error && <p>{error}</p>}
      <input
        className="mb-2"
        type="email"
        value={email}
        onChange={(e) =>
          setEmail((currentEmail) => (currentEmail = e.target.value))
        }
        required
      />
      <input
        className="mb-2"
        type="password"
        value={password}
        onChange={(e) =>
          setPassword((currentPassword) => (currentPassword = e.target.value))
        }
        required
      />
      <button type="submit" className="btn-success">
        {loading ? "Loading" : "Submit"}
      </button>
    </form>
  );
}
