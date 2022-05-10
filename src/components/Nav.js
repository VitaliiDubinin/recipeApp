import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="menu">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="menu">
            Recipes
          </Link>
        </li>

        <li>
          <Link to="/addrecipe" className="menu">
            Add new recipe
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
