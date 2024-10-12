import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Main = () => {
  const isAuthenticated = useAuth();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4">Ласкаво просимо!</h1>
      <p className="mb-6">Це головна сторінка нашого додатку.</p>
      {!isAuthenticated && (
        <Link
          to="/login"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Увійти
        </Link>
      )}
    </div>
  );
};

export default Main;
