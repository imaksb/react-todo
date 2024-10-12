import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MainLayout from "./MainLayout";

const AuthLayout = () => {
  const isAuthenticated = useAuth();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <MainLayout />;
};

export default AuthLayout;
