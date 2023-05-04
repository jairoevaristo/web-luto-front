import React, { useMemo } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setAuthenticated] = React.useState(false);

  const values = useMemo(
    () => ({
      isAuthenticated,
      setAuthenticated
    }), [
      isAuthenticated,
      setAuthenticated
    ]
  );

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};