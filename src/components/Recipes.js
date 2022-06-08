import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // const getRecipes = () => axios.get("http://localhost:3010/recipes");
  // const getRecipes = () => axios.get("https://my-json-server.typicode.com/vitaliidubinin/jsonforrecipeapp/recipes");
  const getRecipes = () => axios.get("https://tasteofdream.herokuapp.com/api");
  const getCountries = () => axios.get("https://restcountries.com/v3.1/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1]; // because countries starts from first index

      setRecipes(recipesData.data);

      setCountries(countriesData.data);

      setLoading(false);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const recipeFilter = recipes.filter((res) => {
    return res.name.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return <p>Loading....</p>;
  } else {
    return (
      <>
        <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
          <h3>{search}</h3>
        </div>

        <div className="cards">
          {recipeFilter.map((recipe) => (
            <RecipeCard key={recipe.id} data={recipe} country={countries.find((country) => country.cca2 === recipe.country2)} {...recipe} />
          ))}
        </div>
      </>
    );
  }
};
// }

export default Recipes;
