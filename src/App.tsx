import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./pages/Todo";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import News from "./pages/News";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
