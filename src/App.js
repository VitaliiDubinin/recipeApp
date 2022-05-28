import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./App.css";
import RecipeSingle from "./components/RecipeSingle";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
// import AddRecipe from "./components/AddRecipe";
import AddRecForm from "./components/AddRecForm";
import About from "./components/About";

const RouterWrapper = (props) => {
  const params = useParams();
  return <RecipeSingle params={params} {...props} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipeApp" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipeApp/about" element={<About />} />
          <Route path="/recipeApp/recipes" element={<Recipes />} />
          <Route path="/recipeApp/recipes/:recipesingle" element={<RouterWrapper />} />
          <Route path="/recipeApp/addrecipe" element={<AddRecForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
