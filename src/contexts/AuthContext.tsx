import React, { useContext, createContext, useState } from "react";

type User = {
  token: string | null;
  setToken: Function;
  visibleMenu: boolean;
  setVisibilityMenu: Function;
};

export const AuthContext = createContext<User>({} as User);

export type ProviderProp = {
  children: React.ReactChild;
};

export function AuthProvider({ children }: ProviderProp) {
  const [token, setToken] = useState(null);
  const [isMenuVisible, setMenuVisible] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        visibleMenu: isMenuVisible,
        setVisibilityMenu: setMenuVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): User => useContext(AuthContext);
