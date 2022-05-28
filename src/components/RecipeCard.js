import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ name, desc, image, data, country, add, likes }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{desc}</p>
      <img src={image} alt={name} />
      <img className="flag" src={country.flags.png} alt={country.name.common} />

      <span onClick={add} className="material-icons likeBut">
        favorite
      </span>
      <div className="likes">{likes}</div>

      <div>
        <Link to={name} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
