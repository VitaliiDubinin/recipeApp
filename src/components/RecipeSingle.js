import React from "react";
// import React, { useEffect, useState } from "react";
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
    <div className="singlecard">
      <h1>{recipe.name}</h1>
      <img className="singcardimage" src={recipe.image} alt={recipe.name} />
      <img className="flagsq" src={country.flags.png} alt={country.name.common} />
      <p>Author:{recipe.author}</p>
      <p>Description:{recipe.description}</p>
      <p>Instruction:{recipe.instruction}</p>

      {/* {console.log(recipe.ingreds[0])} */}
      {console.log(recipe.ingreds.map((ing) => [ing.ingredN, ing.ingredQ]))}
      {/* {console.log(recipe.ingreds.map((ing) => [([ing.ingredN] = ing.ingredQ)]))} */}
      <ul className="ulsing">
        {recipe.ingreds.map((ing) => [
          <li key={ing.id}>
            {[ing.ingredN]}: {[ing.ingredQ]}
          </li>,
        ])}
      </ul>
    </div>
  );
};
export default RecipeSingle;
