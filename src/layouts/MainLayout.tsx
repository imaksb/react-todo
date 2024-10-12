import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
  const isAuthenticated = useAuth();
  return (
    <>
      <Navbar is_auth={isAuthenticated} />
      <Outlet />
    </>
  );
};

export default MainLayout;
