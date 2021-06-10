export type InitialFormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  error: string[];
  loading: boolean;
};

export type ActionFormTypes =
  | {
      type: "SET_VALUE";
      payload: { keyToBeUpdate: string; userInput: string };
    }
  | {
      type: "SET_LOADING";
      payload: { status: boolean };
    }
  | { type: "SET_ERROR"; payload: { errors: string[] } };

export const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: ["", ""],
  loading: false,
};

export default function formReducer(
  state: InitialFormState,
  action: ActionFormTypes
) {
  switch (action.type) {
    case "SET_VALUE":
      const { keyToBeUpdate, userInput } = action.payload;
      return { ...state, [keyToBeUpdate]: userInput };

    case "SET_ERROR":
      const { errors } = action.payload;
      return { ...state, error: errors };

    case "SET_LOADING":
      const { status } = action.payload;
      return { ...state, loading: status };
    default:
      return { ...state };
  }
}
