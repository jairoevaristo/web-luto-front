import { createContext } from "react";

interface AuthContextData {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
};

export const AuthContext = createContext({} as AuthContextData);