import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const fetches = data.results.map((p) => {
  //         return fetch(p.url).then((res) => res.json());
  //       });

  //       Promise.all(fetches).then((res) => {
  //         setData(res);
  //         setIsLoading(false);
  //       });
  //     });
  // }, []);

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

  useEffect(() => {
    axios.get("http://localhost:3010/recipes").then((res) => setData(res.data));
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <div className="cards">
        {/* {data.map((p) => (
          <RecipeCard name={p.name} key={p.name} image={p.sprites.other.dream_world.front_default} />
        ))} */}
        {data.map((p) => (
          <RecipeCard name={p.name} key={p.id} image={p.image} alter={p.alter} likes={p.likes} description={p.description} flag={p.flag} />
        ))}
      </div>
    );
  }
};
// }

export default Recipes;
