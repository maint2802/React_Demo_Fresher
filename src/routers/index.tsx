import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import MainLayout from "../layouts/MainLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import UserDetail from "../pages/UserDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => redirect("/home"),
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        element: <PrivateLayout />,
        children: [
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/users/:id",
            element: <UserDetail />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
