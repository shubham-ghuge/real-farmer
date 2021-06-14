import axios, { AxiosError } from "axios";

export type FormResponse = {
  success: boolean;
  message: string;
  token?: string;
};

export default async function userLoginAndRegister(
  email: string,
  password: string,
  name?: string
): Promise<FormResponse> {
  try {
    if (name) {
      const response = await axios.post<FormResponse>(
        "https://authentication.shubhamghuge.repl.co/users/register",
        {
          name,
          email,
          password,
        }
      );
      return response.data;
    }
    const response = await axios.post<FormResponse>(
      "https://authentication.shubhamghuge.repl.co/users/login",
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<FormResponse>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    return { success: false, message: "something went wrong!" };
  }
}
