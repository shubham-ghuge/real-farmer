import React, { useContext, createContext } from "react";

type User = {
  token: string | null;
};

export const AuthContext = createContext<User>({} as User);

export function AuthProvider({ children }: { children: React.ReactChild }) {
  return (
    <AuthContext.Provider value={{ token: null }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): User => useContext(AuthContext);
