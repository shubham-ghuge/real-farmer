import React, { useContext, createContext, useState, useEffect } from "react";
import { setupTokenToAxiosRequests } from "../services/auth.service";

type User = {
  loginStatus: Boolean;
  name: string;
  email: string;
  setEmail: Function;
  setName: Function;
  setUserLoginStatus: Function;
};

export const AuthContext = createContext<User>({} as User);

export type ProviderProp = {
  children: React.ReactChild;
};

export function AuthProvider({ children }: ProviderProp) {
  const [loginStatus, setUserLoginStatus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function checkUserSession() {
    const { isUserLoggedIn, token, name, email } = JSON.parse(
      localStorage.getItem("login") as string
    ) ?? { isUserLoggedIn: false, token: "", name: "", email: "" };
    if (isUserLoggedIn) {
      setUserLoginStatus(() => token);
      setName(() => name);
      setEmail(() => email);
      setupTokenToAxiosRequests(token);
    }
  }

  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginStatus,
        name,
        email,
        setEmail,
        setName,
        setUserLoginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): User => useContext(AuthContext);
