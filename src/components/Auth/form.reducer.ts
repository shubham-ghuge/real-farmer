export type InitialFormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  visiblePassword: boolean;
  visibleConfirmPassword: boolean;
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
  | { type: "SET_ERROR"; payload: { key: string; isError: boolean } }
  | { type: "SET_VISIBILITY"; payload: { prop: string; value: boolean } };

export const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  loading: false,
  visiblePassword: false,
  visibleConfirmPassword: false,
};

export default function formReducer(
  state: InitialFormState,
  action: ActionFormTypes
) {
  switch (action.type) {
    case "SET_VALUE":
      const { keyToBeUpdate, userInput } = action.payload;
      return { ...state, [keyToBeUpdate]: userInput };

    case "SET_LOADING":
      const { status } = action.payload;
      return { ...state, loading: status };

    case "SET_VISIBILITY":
      const { prop, value } = action.payload;
      return { ...state, [prop]: !value };

    default:
      return { ...state };
  }
}
