import { createBrowserRouter, redirect } from "react-router-dom";
import ReportPage from "../views/ReportPage";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import UserListPage from "../views/UserListPage";
import RegisterPage from "../views/RegisterPage";
import Root from "../views/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: () => {
    //   const token = localStorage.getItem("access_token");
    //   if (!token) {
    //     return redirect("/login");
    //   }
    //   return token;
    // },
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UserListPage />,
      },
      {
        path: "reports",
        element: <ReportPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  //   loader: () => {
  //     const token = localStorage.getItem("access_token");
  //     if (token) {
  //       return redirect("/products");
  //     }
  //     return token;
  //   },
  // },
]);

export default router;
