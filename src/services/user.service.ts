import axios from "axios";
import { QuizResultResponse } from "../data/quizData.types";
import { requestErrorHandler } from "./utils.service";

async function getUserQuizResult() {
  try {
    const response = await axios.get<QuizResultResponse>(
      "https://realfarmer-quiz.herokuapp.com/users/results"
    );
    return response.data;
  } catch (error) {
    return requestErrorHandler(error);
  }
}
export { getUserQuizResult };
