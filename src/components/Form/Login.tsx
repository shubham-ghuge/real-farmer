import React from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const { setToken } = useAuthContext();
  let navigate = useNavigate();
  function loginUser(e: React.FormEvent) {
    e.preventDefault();
    setToken(() => "aaa");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={(event) => loginUser(event)}
      className="ai-center flex-column"
    >
      <input className="mb-2" type="email" />
      <input className="mb-2" type="password" />
      <button type="submit" className="btn-success">
        Submit
      </button>
    </form>
  );
}
