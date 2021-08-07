import React, { useContext, createContext, useState, useEffect } from "react";
import { setupTokenToAxiosRequests } from "../services/auth.service";

type User = {
  loginStatus: Boolean;
  name: string;
  email: string;
  setName: Function;
  setSessionEmail: Function;
  setUserLoginStatus: Function;
  logout: Function;
};

export const AuthContext = createContext<User>({} as User);

export type ProviderProp = {
  children: React.ReactChild;
};

export function AuthProvider({ children }: ProviderProp) {
  const [loginStatus, setUserLoginStatus] = useState(false);
  const [name, setName] = useState("");
  const [email, setSessionEmail] = useState("");

  function checkUserSession() {
    const { isUserLoggedIn, token, name, email } = JSON.parse(
      localStorage.getItem("login") as string
    ) ?? { isUserLoggedIn: false, token: "", name: "", email: "" };
    if (isUserLoggedIn) {
      setUserLoginStatus(() => token);
      setName(() => name);
      setSessionEmail(() => email);
      setupTokenToAxiosRequests(token);
    }
  }
  function logout() {
    localStorage.removeItem("login");
    setUserLoginStatus(false);
    setupTokenToAxiosRequests(null);
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
        setSessionEmail,
        setName,
        setUserLoginStatus,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): User => useContext(AuthContext);
