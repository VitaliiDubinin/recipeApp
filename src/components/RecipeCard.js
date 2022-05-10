import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>

      <Link to={`${props.name}`}>
        <h4>See more</h4>
      </Link>
    </div>
  );
};

export default RecipeCard;
