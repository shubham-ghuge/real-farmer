import { createContext, useContext, useReducer } from "react";
import { ProviderProp } from "./AuthContext";
import {
  InitialStateType,
  initialState,
  quizReducer,
} from "../reducers/quizReducer";

type ContextDefaultValueType = {
  initialState: InitialStateType;
  dispatch: Function;
};

const QuizContext = createContext<ContextDefaultValueType>(
  {} as ContextDefaultValueType
);

export const QuizProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider
      value={{
        initialState: {
          quizQuestions: state.quizQuestions,
          score: state.score,
          currentQuestion: state.currentQuestion,
          userAnswers: state.userAnswers,
        },
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
