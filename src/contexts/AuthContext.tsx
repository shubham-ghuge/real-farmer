import React, { useContext, createContext, useState } from "react";

type User = {
  token: string | null;
  name: string;
  setToken: Function;
  setName: Function;
  visibleMenu: boolean;
  setVisibilityMenu: Function;
};

export const AuthContext = createContext<User>({} as User);

export type ProviderProp = {
  children: React.ReactChild;
};

export function AuthProvider({ children }: ProviderProp) {
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [isMenuVisible, setMenuVisible] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        token,
        name,
        setName,
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
