import { QuestionType } from "../data/quizData.types";
import { questions } from "../data/quizData";

export type ACTIONTYPE =
  | {
      type: "CHANGE_QUESTION";
      payload: { questionIndex: number };
    }
  | {
      type: "MARK_ANSWER";
      payload: { currentQuestionIndex: number; optionIndex: number };
    }
  | { type: "SET_QUIZ"; payload: { data: QuestionType[] } }
  | { type: "RESET_QUIZ" };

export type Answers = {
  question: number;
  answer: number;
};

export type InitialStateType = {
  quizQuestions: QuestionType[];
  score: number;
  currentQuestion: number;
  userAnswers: Answers[];
};

export const initialState = {
  quizQuestions: questions,
  score: 0,
  currentQuestion: 0,
  userAnswers: [],
};

export const quizReducer = (state: InitialStateType, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_QUIZ":
      const { data } = action.payload;
      return { ...state, quizQuestions: data };

    case "RESET_QUIZ":
      return {
        ...state,
        quizQuestions: [],
        currentQuestion: 0,
        score: 0,
        userAnswers: [],
      };

    case "CHANGE_QUESTION":
      let { questionIndex } = action.payload;
      return {
        ...state,
        currentQuestion: questionIndex + 1,
      };

    case "MARK_ANSWER":
      let { currentQuestionIndex, optionIndex } = action.payload;
      const answer =
        state.quizQuestions[currentQuestionIndex].options[optionIndex].isRight;
      return {
        ...state,
        userAnswers: [
          ...state.userAnswers,
          { question: currentQuestionIndex, answer: optionIndex },
        ],
        score: answer ? state.score + 5 : state.score,
      };

    default:
      return { ...state };
  }
};
