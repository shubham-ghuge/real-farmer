import axios from "axios";
import {
  CertificateValidation,
  QuizResultResponse,
} from "../data/quizData.types";
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

async function validateUserCertificates(
  email: string
): Promise<CertificateValidation> {
  try {
    const response = await axios.get<CertificateValidation>(
      `https://realfarmer-quiz.herokuapp.com/certificate/${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { quizCertificateData: [], name: "error" };
  }
}

async function postQuizResult(score: number, quizId: string) {
  try {
    const response = await axios.post(
      "https://realfarmer-quiz.herokuapp.com/users/result",
      {
        quizId,
        score,
      }
    );
    console.log(response.data);
  } catch (error) {
    return requestErrorHandler(error);
  }
}
export { getUserQuizResult, validateUserCertificates, postQuizResult };
