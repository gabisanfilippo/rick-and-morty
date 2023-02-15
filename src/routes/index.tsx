import { Characters } from "../pages/Characters";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { CharacterDetails } from "../pages/CharacterDetails";
import { Locations } from "../pages/Locations";
import { LocationDetails } from "../pages/LocationDetails";
import { Episodes } from "../pages/Episodes";
import { EpisodeDetails } from "../pages/EpisodeDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
  },
  {
    path: "/character/:id",
    element: <CharacterDetails />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/locations/:id",
    element: <LocationDetails />,
  },
  {
    path: "/episodes",
    element: <Episodes />,
  },
  {
    path: "/episodes/:id",
    element: <EpisodeDetails />,
  },
]);
