import React, { useEffect, useState } from "react";

const RecipeSingle = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    // fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.recipesingle}`)
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.recipesingle}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h3>{data.name}</h3>
        single Pokemon will be here
        <img src={data.sprites?.other.dream_world.front_default} alt={data.name} />
      </div>
    );
  }
};
export default RecipeSingle;
