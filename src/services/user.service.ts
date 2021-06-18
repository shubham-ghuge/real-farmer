import axios from "axios";
import { QuizResultResponse } from "../data/quizData.types";
import { requestErrorHandler } from "./utils.service";

async function getUserQuizResult(): Promise<QuizResultResponse> {
  try {
    const response = await axios.get<QuizResultResponse>(
      "https://realfarmer-quiz.herokuapp.com/users/result"
    );
    return response.data;
  } catch (error) {
    return requestErrorHandler(error);
  }
}
export { getUserQuizResult };
