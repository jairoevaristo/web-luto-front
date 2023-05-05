import React from "react";
import { AuthContext } from "./AuthContext";
import { useGetUser } from "../hooks/useGetUser";

export const useAuth = () => {
  return React.useContext(AuthContext);
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data  } = useGetUser();
  const [isAuthenticated, setAuthenticated] = React.useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};