import { createContext, useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { localStorageKeys } from "../config/localStorageKeys";
import { usersService } from "../services/usersService";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextValue);

function AuthProvider({ children }: AuthProviderProps) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });

  useQuery({
    queryKey: ["users", "me"],
    queryFn: async () => {
      return usersService.me();
    },
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
