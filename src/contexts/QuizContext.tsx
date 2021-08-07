import { createContext, useContext, useEffect, useReducer } from "react";
import { ProviderProp, useAuthContext } from "./AuthContext";
import {
  InitialStateType,
  initialState,
  quizReducer,
} from "../reducers/quizReducer";
import { getQuizInitialData } from "../services/quizData.service";

type ContextDefaultValueType = {
  initialState: InitialStateType;
  dispatch: Function;
};

const QuizContext = createContext<ContextDefaultValueType>(
  {} as ContextDefaultValueType
);

export const QuizProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { loginStatus } = useAuthContext();

  async function getData() {
    try {
      dispatch({ type: "SET_LOADING" });
      const { listOfQuizzes } = await getQuizInitialData();
      listOfQuizzes &&
        dispatch({ type: "SET_QUIZ_DATA", payload: listOfQuizzes });
      dispatch({ type: "SET_LOADING" });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loginStatus && getData();
  }, [loginStatus]);

  return (
    <QuizContext.Provider
      value={{
        initialState: {
          quizData: state.quizData,
          loading: state.loading,
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
