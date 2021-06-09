import axios, { AxiosError } from "axios";
import { useReducer, useState } from "react";

type UserRegisterResponse = {
  status: boolean;
  message: string;
};

type InitialFormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: string[];
};

type ActionFormTypes =
  | {
      type: "SET_VALUE";
      payload: { keyToBeUpdate: string; userInput: string };
    }
  | { type: "SET_ERROR"; payload: { errors: string[] } }
  | {
      type: "SUBMIT_FORM";
    };

export default function Form() {
  const [data, setData] = useState<UserRegisterResponse>(
    {} as UserRegisterResponse
  );
  function formReducer(state: InitialFormState, action: ActionFormTypes) {
    switch (action.type) {
      case "SET_VALUE":
        const { keyToBeUpdate, userInput } = action.payload;
        return { ...state, [keyToBeUpdate]: userInput };

      case "SET_ERROR":
        const { errors } = action.payload;
        return { ...state, error: errors };

      case "SUBMIT_FORM":
        return { ...state };
      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: ["", ""],
  });

  async function registerUser(
    email: string,
    password: string
  ): Promise<UserRegisterResponse> {
    try {
      const response = await axios.post<UserRegisterResponse>(
        "https://authentication.shubhamghuge.repl.co/users/register",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<UserRegisterResponse>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      return { status: false, message: "something went wrong!" };
    }
  }

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
    const errorList = [];
    if (state.name.length < 2) {
      errorList.push("Name must be atleast 2 characters");
    }
    if (state.password.length < 6) {
      errorList.push("Password must be at least 6 characters");
    }
    if (state.password !== state.confirmPassword) {
      errorList.push("Passwords Does not match");
    }
    if (errorList !== null) {
      dispatch({ type: "SET_ERROR", payload: { errors: errorList } });
    }
    const data: UserRegisterResponse = await registerUser(
      state.email,
      state.password
    );
    return setData(data);
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
          Submit
        </button>
      </form>
    </>
  );
}
