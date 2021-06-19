import axios from "axios";
import { AuthFormResponse } from "../data/quizData.types";
import { requestErrorHandler } from "./utils.service";

export default async function userLoginAndRegister(
  email: string,
  password: string,
  name?: string
): Promise<AuthFormResponse> {
  try {
    if (name) {
      const response = await axios.post<AuthFormResponse>(
        "https://realfarmer-quiz.herokuapp.com/users/register",
        {
          name,
          email,
          password,
        }
      );
      return response.data;
    }
    const response = await axios.post<AuthFormResponse>(
      "https://realfarmer-quiz.herokuapp.com/users/login",
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    return requestErrorHandler(error);
  }
}

export function setupTokenToAxiosRequests(token: string | null) {
  if (token) {
    return (axios.defaults.headers.common["authorization"] = token);
  }
  delete axios.defaults.headers.common["authorization"];
}
