import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./App.css";
import RecipeSingle from "./components/RecipeSingle";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import About from "./components/About";

const RouterWrapper = (props) => {
  const params = useParams();
  return <RecipeSingle params={params} {...props} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:recipesingle" element={<RouterWrapper />} />
          <Route path="addrecipe" element={<AddRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
