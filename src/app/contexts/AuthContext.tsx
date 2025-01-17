import { createContext } from "react";

interface AuthContextValue {
  signedIn: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextValue);

function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        signedIn: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
