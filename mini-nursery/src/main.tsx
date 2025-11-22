import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Plant } from "./types";
import 'bootstrap/dist/css/bootstrap.min.css';

const plants: Plant[] = [
  {
    id: 1,
    name: "Snake Plant",
    scientific: "Sansevieria trifasciata",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    rarity: "Common",
    description: "Very easy to care for. Good for beginners."
  },
  {
    id: 2,
    name: "Monstera",
    scientific: "Monstera Deliciosa",
    difficulty: "Medium",
    light: "Bright",
    water: "Moderate",
    rarity: "Uncommon",
    description: "Large, beautiful leaves with natural holes."
  },
  {
    id: 3,
    name: "Peace Lily",
    scientific: "Spathiphyllum",
    difficulty: "Easy",
    light: "Medium",
    water: "Frequent",
    rarity: "Common",
    description: "Popular indoor plant with white flowers."
  }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App plants={plants} />
  </React.StrictMode>,
)