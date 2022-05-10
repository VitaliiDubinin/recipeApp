import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });

        Promise.all(fetches).then((res) => {
          setData(res);
          setIsLoading(false);
        });
      });
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  } else {
    return (
      <div className="cards">
        {data.map((p) => (
          <RecipeCard name={p.name} key={p.name} image={p.sprites.other.dream_world.front_default} />
        ))}
      </div>
    );
  }
};
// }

export default Recipes;
