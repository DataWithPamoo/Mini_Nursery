
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import {Plant} from "./types";

const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    scientific: "Sansevieria trifasciata",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "A tough indoor plant with thick upright leaves."
  },
  {
    id: 2,
    name: "Peace Lily",
    scientific: "Spathiphyllum",
    difficulty: "Medium",
    light: "Medium",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Beautiful white flowers and lush green leaves."
  },
  {
    id: 3,
    name: "Monstera",
    scientific: "Monstera Deliciosa",
    difficulty: "Medium",
    light: "Bright",
    water: "Frequent",
    rarity: "Rare",
    description: "Large split leaves and tropical appearance."
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App plants={plants} />
  </React.StrictMode>
);
