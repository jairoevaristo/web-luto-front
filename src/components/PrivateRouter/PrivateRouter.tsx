import { Navigate } from "react-router-dom";
import { useGetUser } from "../../hooks/useGetUser";
import { useToast } from "../../hooks/useToast";
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