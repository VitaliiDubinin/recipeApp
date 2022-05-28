import React from "react";
// import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RecipeSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div className="singlecard">
      <h1>{recipe.name}</h1>
      <img className="singcardimage" src={recipe.image} alt={recipe.name} />
      <img className="flagsq" src={country.flags.png} alt={country.name.common} />
      <p>Author:{recipe.author}</p>
      <p>Description:{recipe.description}</p>
      <p>Instruction:{recipe.instruction}</p>
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
