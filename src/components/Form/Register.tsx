import { useReducer, useState } from "react";
import { useNavigate } from "react-router";
import formReducer, { initialState } from "./formReducer";
import registerUser, { UserRegisterResponse } from "./register.service";

export default function Form() {
  const [data, setData] = useState<UserRegisterResponse>(
    {} as UserRegisterResponse
  );

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

  function validateInput() {
    let errorList = [];
    if (state.name.length < 2) {
      errorList.push("Name must be atleast 2 characters");
    }
    if (state.password.length < 6) {
      errorList.push("Password must be at least 6 characters");
    }
    if (state.password !== state.confirmPassword) {
      errorList.push("Passwords Does not match");
    }
    if (errorList.length !== 0) {
      dispatch({ type: "SET_ERROR", payload: { errors: errorList } });
      return false;
    }
    return true;
  }

  async function submitFormData(event: React.SyntheticEvent) {
    event.preventDefault();
    const validations = validateInput();
    if (validations) {
      dispatch({ type: "SET_ERROR", payload: { errors: [] } });
      dispatch({ type: "SET_LOADING", payload: { status: true } });
      const data: UserRegisterResponse = await registerUser(
        state.email,
        state.password
      );
      dispatch({ type: "SET_LOADING", payload: { status: false } });
      setData(data);
      return setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  }

  return (
    <>
      {data && <p>{data.message}</p>}
      <form
        className="ai-center flex-column"
        onSubmit={(event) => submitFormData(event)}
      >
        {state.error.map((error, idx) => {
          if (error !== "") return <p key={idx}>{error}</p>;
          return null;
        })}
        <input
          className="mb-2"
          placeholder="John Doe"
          value={state.name}
          name="name"
          type="text"
          onChange={(evt) => setInput(evt)}
          required
        />
        <input
          className="mb-2"
          placeholder="you@example.com"
          value={state.email}
          name="email"
          type="email"
          onChange={(evt) => setInput(evt)}
          required
        />
        <input
          className="mb-2"
          placeholder="password"
          value={state.password}
          name="password"
          type="password"
          onChange={(evt) => setInput(evt)}
          required
        />
        <input
          className="mb-2"
          placeholder="confirm password"
          value={state.confirmPassword}
          name="confirmPassword"
          type="password"
          onChange={(evt) => setInput(evt)}
          required
        />
        <button type="submit" className="btn-success">
          {state.loading ? "loading..." : "Submit"}
        </button>
      </form>
    </>
  );
}
