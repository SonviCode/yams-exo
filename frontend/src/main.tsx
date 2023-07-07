import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./style/index.css";
import Error404 from "./pages/Error404.tsx";
import Report from "./pages/Report.tsx";
import Game from "./pages/Game.tsx";
import { SkeletonTheme } from "react-loading-skeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "game",
    element: <Game />,
    errorElement: <Error404 />,
  },
  {
    path: "report",
    element: <Report />,
    errorElement: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SkeletonTheme>
      <RouterProvider router={router} />
    </SkeletonTheme>
  </React.StrictMode>
);
