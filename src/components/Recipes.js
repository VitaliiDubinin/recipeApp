import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Recipes = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState();
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getRecipes = () => axios.get("http://localhost:3010/recipes");
  const getCountries = () => axios.get("https://restcountries.com/v3.1/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1]; // because countries starts from first index
      // console.log(countriesData.data);
      // console.log(countriesData.data.map((e) => [e.flag, e.cca2, e.name.common]));

      setRecipes(recipesData.data);
      // console.log(recipes);
      setCountries(countriesData.data);
      // console.log(countries);
      // console.log(countries.find((country) => country.cca2 === "BG"));
      // console.log(countries.find((country) => country.cca2 === "BG"));

      setLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/name/japan").then((res) => console.log(res.data));
  // }, []);
  // useEffect(() => {
  //   axios.get("https://restcountries.com/v2/alpha?codes=nz").then((res) => console.log(res.data));
  // }, []);
  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/name/bulgaria").then((res) => console.log(res.data[0].flag));
  // }, []);
  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/name/bulgaria").then((res) => console.log(res.data[0].flags.svg));
  // }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3010/recipes").then((res) => setData(res.data));
  // }, []);
  const searchHandler = (e) => {
    // console.log(e.target.value);
    // this.state.search=e.target.value   -not doing that , mutating direction

    setSearch(e.target.value);
    // console.log(search);
  };

  const recipeFilter = recipes.filter((res) => {
    return res.name.toLowerCase().includes(search.toLowerCase());
    // return recipe.name.includes(search);
    // return console.log(r.name.includes(search).toLowerCase());
  });

  if (loading) {
    return <p>Loading....</p>;
  } else {
    // return (
    //   <div className="cards">
    //     {data.map((p) => (
    //       <RecipeCard name={p.name} key={p.id} image={p.image} alter={p.alter} likes={p.likes} description={p.description} flag={p.flag} />
    //     ))}
    //   </div>
    // );

    return (
      <>
        <div className="search">
          <input type="text" placeholder="🔍" onChange={searchHandler} />
          <h3>{search}</h3>
        </div>

        <div className="cards">
          {recipeFilter.map((recipe) => (
            // {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} data={recipe} country={countries.find((country) => country.cca2 === recipe.country2)} {...recipe} />
          ))}
        </div>
      </>
    );
  }
};
// }

export default Recipes;
