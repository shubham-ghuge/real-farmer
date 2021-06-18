import axios from "axios";
import {
  QuizDataResponse,
  QuizNameAndId,
} from "../data/quizData.types";
import { requestErrorHandler } from "./utils.service";

async function getQuizInitialData(): Promise<QuizNameAndId> {
  try {
    const response = await axios.get<QuizNameAndId>(
      "https://realfarmer-quiz.herokuapp.com/quiz/"
    );
    return response.data;
  } catch (error) {
    return requestErrorHandler(error);
  }
}

async function getQuizData(quizId: string): Promise<QuizDataResponse> {
  try {
    const response = await axios.get<QuizDataResponse>(
      `https://realfarmer-quiz.herokuapp.com/quiz/${quizId}`
    );
    return response.data;
  } catch (error) {
    return requestErrorHandler(error);
  }
}

export { getQuizInitialData, getQuizData };
