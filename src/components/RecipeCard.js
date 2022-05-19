import React from "react";
import { Link } from "react-router-dom";

// const RecipeCard = (props) => {
//   return (
//     <div className="card">
//       <img className="flag" src={props.flag} alt={props.name} />
//       <img src={props.image} alt={props.alter} />
//       <h3>{props.name}</h3>
//       <div>{props.description}</div>
//       <Link to={`${props.name}`}>See more</Link>
//       <span onClick={props.add} className="material-icons likeBut">
//         favorite
//       </span>

//       <div className="likes">{props.likes}</div>
//     </div>
//   );
// };

const RecipeCard = ({ name, desc, image, data, country, add, likes }) => {
  // console.log(country);
  // console.log(data);
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
