import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/pexels-ekaterina-bolovtsova-5380369.mp4";

const Home = () => {
  return (
    <div className="homeMain">
      <div>
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="homeNav">
        {/* <Link to="/"> */}
        <div className="noto-emoji emonav">👀 📝 ?</div>
        {/* </Link> */}
        <Link to="/about">
          <div className="noto-emoji emonav">🧍🏻‍♀️👫🏿👫🧍🏻</div>
        </Link>
        <Link to="/addrecipe">
          <div className="noto-emoji emonav spanImage">+ </div>
        </Link>
        <Link to="/recipes">
          <div className="noto-emoji emonav">👩‍🍳👨‍🍳 </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
