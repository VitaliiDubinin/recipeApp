import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />

      <h3>{props.name}</h3>

      <div>short recipe description not more than 25 words</div>

      <Link to={`${props.name}`}>See more</Link>
      <span onClick={props.add} className="material-icons likeBut">
        favorite
      </span>

      <div className="likes">5{props.like}</div>
    </div>
  );
};

export default RecipeCard;
