export type ACTIONTYPE =
  | { type: "INCREMENT_SCORE"; payload: number }
  | { type: "DECREMENT_SCORE"; payload: number };

export const initialState = {
  score: 0,
};
export const scoreReducer = (
  state: typeof initialState,
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return { ...state, score: state.score + action.payload };

    case "DECREMENT_SCORE":
      return { ...state, score: state.score - action.payload };
    default:
      return state;
  }
};
