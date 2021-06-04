import React, { useContext, createContext } from "react";

type User = {
  token: string;
};

export const AuthContext = createContext({ token: "aa" });

export function AuthProvider({
  children,
}: {
  children: React.ReactChild;
}) {
  return (
    <AuthContext.Provider value={{ token: "aaa" }}>
      {children}
    </AuthContext.Provider>
  );
}

export const UseAuthContext = (): User => useContext(AuthContext);
