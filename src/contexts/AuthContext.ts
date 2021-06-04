import { useContext, createContext } from "react";

type User = {
  token: string;
};

export const AuthContext = createContext({ token: "aa" });

export const UseAuthContext = (): User => useContext(AuthContext);
