import { useReducer, useState } from "react";
import { useNavigate } from "react-router";
import formReducer, { initialState } from "./form.reducer";
import registerUser from "../../services/auth.service";
import { Email, Hide, Key, User, Show, Warning, Loader } from "../Icons";
import { Alert } from "../Alert";
import checkError from "../../services/validation.service";
import { AuthFormResponse } from "../../data/quizData.types";
import { Link } from "react-router-dom";

export default function Form() {
  const [data, setData] = useState<AuthFormResponse>({} as AuthFormResponse);
  let navigate = useNavigate();
  const [state, dispatch] = useReducer(formReducer, initialState);

  function setInput(event: React.FormEvent<HTMLInputElement>) {
    return dispatch({
      type: "SET_VALUE",
      payload: {
        keyToBeUpdate: event.currentTarget.name,
        userInput: event.currentTarget.value,
      },
    });
  }

  async function submitFormData(event: React.SyntheticEvent) {
    event.preventDefault();
    const { name, email, password, confirmPassword } = state;
    const validate =
      name.length >= 2 && password.length >= 6 && password === confirmPassword;
    if (validate) {
      dispatch({ type: "SET_LOADING", payload: { status: true } });
      const data: AuthFormResponse = await registerUser(email, password, name);
      dispatch({ type: "SET_LOADING", payload: { status: false } });
      if ("message" in data) {
        setData(data);
      }
      return (
        data.success &&
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500)
      );
    }
    return setData({ success: false, message: "check validations" });
  }
  return (
    <>
      <div className="mb-4">
        {data.message && (
          <Alert
            type={data.success ? "success" : "danger"}
            heading={data.message}
            message={data.success ? "you'll be redirect to login" : ""}
          />
        )}
      </div>
      <form
        className="ai-center flex-column"
        onSubmit={(event) => submitFormData(event)}
      >
        <div className="mb-4">
          <div className={`icon-input `}>
            <User />
            <input
              placeholder="John Doe"
              value={state.name}
              name="name"
              type="text"
              onChange={(evt) => setInput(evt)}
              required
            />
            {checkError(state.name, "name") && <Warning />}
          </div>
          {checkError(state.name, "name")}
        </div>
        <div className="mb-4">
          <div className="icon-input">
            <Email />
            <input
              placeholder="you@example.com"
              value={state.email}
              name="email"
              type="email"
              onChange={(evt) => setInput(evt)}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="icon-input">
            <Key />
            <input
              placeholder="password"
              value={state.password}
              name="password"
              type={state.visiblePassword ? "text" : "password"}
              onChange={(evt) => setInput(evt)}
              required
            />
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "SET_VISIBILITY",
                  payload: {
                    prop: "visiblePassword",
                    value: state.visiblePassword,
                  },
                })
              }
            >
              {state.visiblePassword ? <Hide /> : <Show />}
            </button>
          </div>
          {checkError(state.password, "password")}
        </div>
        <div className="mb-4">
          <div className="icon-input">
            <Key />
            <input
              placeholder="confirm password"
              value={state.confirmPassword}
              name="confirmPassword"
              type={state.visibleConfirmPassword ? "text" : "password"}
              onChange={(evt) => setInput(evt)}
              required
            />
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "SET_VISIBILITY",
                  payload: {
                    prop: "visibleConfirmPassword",
                    value: state.visibleConfirmPassword,
                  },
                })
              }
            >
              {state.visibleConfirmPassword ? <Hide /> : <Show />}
            </button>
          </div>
          {checkError(state.confirmPassword, "confirmPassword", state.password)}
        </div>
        <button type="submit" className="btn-success cta">
          {state.loading ? <Loader /> : "create account"}
        </button>
      </form>
      <p className="text-center mt-4">
        already have an account{" "}
        <span>
          <Link to="/">Log In</Link>
        </span>
      </p>
    </>
  );
}
