import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RecipeSingle = () => {
  // const RecipeSingle = (props) => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState();
  // useEffect(() => {
  //   setIsLoading(true);
  //   // fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.recipesingle}`)
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.recipesingle}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setIsLoading(false);
  //     });
  // }, []);
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // } else {
  //   return (
  //     <div>
  //       <h3>{data.name}</h3>
  //       single Pokemon will be here
  //       <img src={data.sprites?.other.dream_world.front_default} alt={data.name} />
  //     </div>
  //   );
  // }

  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  console.log(recipe);
  console.log(country);

  return (
    <div className="card">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <img className="flag" src={country.flags.png} alt={country.name.common} />
    </div>
  );
};
export default RecipeSingle;
