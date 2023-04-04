import React from "react";
import { UserInfo } from "../services/interface";

interface ValueContext {
  user: UserInfo | undefined;
  users: UserInfo[];
}

interface ValueProviderProps {
  children: React.ReactNode;
}

export const ValueContext = React.createContext({} as ValueContext);

export const ValueProvider: React.FC<ValueProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<UserInfo>();
  const [users, setUsers] = React.useState<UserInfo[]>([]);

  return (
    <ValueContext.Provider
      value={{
        user,
        users,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};