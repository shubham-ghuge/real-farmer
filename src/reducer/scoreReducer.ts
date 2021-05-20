export type SCORE_PAYLOAD = {
  id: string;
  score: number;
};
export type ACTIONTYPE =
  | { type: "INCREMENT_SCORE"; payload: SCORE_PAYLOAD }
  | { type: "DECREMENT_SCORE"; payload: SCORE_PAYLOAD };

export const initialState = {
  score: 0,
};
export const scoreReducer = (
  state: typeof initialState,
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return { ...state};

    case "DECREMENT_SCORE":
      return { ...state};
    default:
      return state;
  }
};
