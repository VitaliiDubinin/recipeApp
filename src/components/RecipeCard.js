import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <img className="flag" src={props.flag} alt={props.name} />
      <img src={props.image} alt={props.alter} />

      <h3>{props.name}</h3>

      <div>{props.description}</div>

      <Link to={`${props.name}`}>See more</Link>
      <span onClick={props.add} className="material-icons likeBut">
        favorite
      </span>

      <div className="likes">{props.likes}</div>
    </div>
  );
};

export default RecipeCard;
