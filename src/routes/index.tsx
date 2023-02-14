import { Characters } from "../pages/Characters";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { CharacterDetails } from "../pages/CharacterDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
  },
  {
    path: "/character/:id",
    element: <CharacterDetails />,
  },
]);
