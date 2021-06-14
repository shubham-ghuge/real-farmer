import { useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

export default function Home() {
  const [formState, setFormState] = useState(false);
  return (
    <section className="user-auth">
      <div className="container">
        <h2 className="heading text-center mb-4">
          {formState ? "Register" : "Login"}
        </h2>
        {formState ? <Register /> : <Login />}
        <p className="text-center mt-4">
          {formState ? "already have an account?" : "don't have an account?"}
          <span>
            <button
              className="btn-reset link"
              onClick={() => setFormState((current) => !current)}
            >
              {formState ? "Login" : "Register"}
            </button>
          </span>
        </p>
      </div>
    </section>
  );
}
