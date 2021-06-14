import { useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import PrimaryHeader from "../components/Header/PrimaryHeader";

export default function Home() {
  const [formState, setFormState] = useState(false);
  return (
    <>
      <PrimaryHeader />
      <section className="hero container">
        <h2 className="heading">
          A farmer's knowledge is his or her best possession.
        </h2>
        <p className="fsz-1">
          If you are a farmer, try the quizzes and get yourself
          certified.
        </p>
      </section>
      <section className="user-auth">
        <div>
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
    </>
  );
}
