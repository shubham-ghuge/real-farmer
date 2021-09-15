import axios, { AxiosError } from "axios";
import { BaseFormResponse } from "../data/quizData.types";

function requestErrorHandler(error: any) {
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError<BaseFormResponse>;
    if (serverError && serverError.response) {
      return serverError.response.data;
    }
  }
  return { success: false, message: "something went wrong!" };
}
export { requestErrorHandler };
