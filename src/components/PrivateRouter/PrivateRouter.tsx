import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  let isAuth = isAuthenticated;

  if (!isAuth) {
    return <Navigate to="/" />
  } else {
    return children;
  }
};