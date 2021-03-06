import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/pexels-ekaterina-bolovtsova-5380369.mp4";

const Home = () => {
  return (
    <>
      <div className="homeMain">
        {/* <div> */}
        <video className="video" autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        {/* </div> */}
        <div className="homeNav">
          <Link to="/">
            <div className="noto-emoji emonav">π π ?</div>
          </Link>
          <Link to="/about">
            <div className="noto-emoji emonav">π§π»ββοΈπ«πΏπ«π§π»</div>
          </Link>
          <Link to="/addrecipe">
            <div className="noto-emoji emonav spanImage">+ </div>
          </Link>
          <Link to="/recipes">
            <div className="noto-emoji emonav">π©βπ³π¨βπ³ </div>
          </Link>
        </div>
        {/* <div className="homeNav">
          <Link to="/recipeApp">
            <div className="noto-emoji emonav">π π ?</div>
          </Link>
          <Link to="/recipeApp/about">
            <div className="noto-emoji emonav">π§π»ββοΈπ«πΏπ«π§π»</div>
          </Link>
          <Link to="/recipeApp/addrecipe">
            <div className="noto-emoji emonav spanImage">+ </div>
          </Link>
          <Link to="/recipeApp/recipes">
            <div className="noto-emoji emonav">π©βπ³π¨βπ³ </div>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Home;
