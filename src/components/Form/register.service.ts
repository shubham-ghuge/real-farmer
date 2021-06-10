import axios, { AxiosError } from "axios";

export type UserRegisterResponse = {
  status: boolean;
  message: string;
};

export default async function registerUser(
  email: string,
  password: string
): Promise<UserRegisterResponse> {
  try {
    const response = await axios.post<UserRegisterResponse>(
      "https://authentication.shubhamghuge.repl.co/users/register",
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<UserRegisterResponse>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    return { status: false, message: "something went wrong!" };
  }
}
