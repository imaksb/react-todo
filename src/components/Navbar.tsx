import { NavLink } from "react-router-dom";

interface NavbarProps {
  is_auth: boolean;
}

const Navbar = ({ is_auth }: NavbarProps) => {
  return (
    <div className="flex gap-4 p-4 justify-between bg-gray-200">
      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="news"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          News
        </NavLink>
        {is_auth && (
          <>
            <NavLink
              to="todo"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Todo
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              Profile
            </NavLink>
          </>
        )}
        {!is_auth && (
          <NavLink
            to="login"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Login
          </NavLink>
        )}
      </div>

      {is_auth && (
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            window.location.href = "/";
          }}
          className="text-red-500 hover:text-red-700"
        >
          Вийти
        </button>
      )}
    </div>
  );
};

export default Navbar;
