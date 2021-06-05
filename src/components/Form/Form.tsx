import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Form() {
  const [formState, setFormState] = useState<Boolean>(false);
  return (
    <div className="container flex-column jc-center ">
      <h1 className="text-center mb-4">{formState ? "Register" : "Login"}</h1>
      {formState ? <Register /> : <Login />}
      <p className="text-center mt-4">
        don't have account?
        <span>
          <button
            className="btn-c-primary"
            onClick={() => setFormState((current) => !current)}
          >
            {formState ? "Register" : "Login"}
          </button>
        </span>
      </p>
    </div>
  );
}
