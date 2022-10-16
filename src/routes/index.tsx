import { Characters } from "../pages/Characters";
import { createBrowserRouter } from "react-router-dom";
import React from "react";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
  },
]);
