import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Layout from "./components/Layout/Layout.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Dashbord from "./pages/Dashboard/Dashboard.jsx";
import Expenses from "./pages/Expenses/Expenses.jsx";
import Goals from "./pages/Goals/Goals.jsx";
import Budget from "./pages/Budget/Budget.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/create-account",
        Component: SignUp,
      },
      {
        path: "/",
        Component: Layout,
        children: [
          {
            path: "overview",
            Component: Dashbord,
          },
          {
            path: "expenses",
            Component: Expenses,
          },
          {
            path: "goals",
            Component: Goals,
          },
          {
            path: "budget",
            Component: Budget,
          },
          {
            path: "analytics",
            Component: Analytics,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
