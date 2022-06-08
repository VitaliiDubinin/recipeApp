import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="menu">
            🏠
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="menu">
            📝
          </Link>
        </li>

        <li>
          <Link to="/addrecipe" className="menu2 emonav2">
            <span className="spanImage2">.+ .</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/recipeApp" className="menu">
            🏠
          </Link>
        </li>
        <li>
          <Link to="/recipeApp/recipes" className="menu">
            📝
          </Link>
        </li>

        <li>
          <Link to="/recipeApp/addrecipe" className="menu2 emonav2">
            <span className="spanImage2">.+ .</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
