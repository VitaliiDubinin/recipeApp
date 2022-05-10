import React, { useEffect, useState } from "react";

const RecipeSingle = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.recipesingle}`)
      .then((res) => res.json())
      .then((jsdata) => {
        setData(jsdata);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h3>{this.state.data.name}</h3>single Pokemon will be here
        <img src={this.state.data.sprites?.other.dream_world.front_default} alt={this.state.data.name} />
      </div>
    );
  }
};
export default RecipeSingle;
