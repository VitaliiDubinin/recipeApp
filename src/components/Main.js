import React from "react";
// import AddRecipe from "./AddRecipe";
// import Recipes from "./Recipes";
// import RecipeSingle from "./RecipeSingle";

// import Home from "./Home";
// import { Routes, Route, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;
