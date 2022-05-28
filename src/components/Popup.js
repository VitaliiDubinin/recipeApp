import React from "react";

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>This is your recipe:</h2>

        <p>
          First name: <span>{props.name}</span>
        </p>
        <p>
          Last name: <span>{props.image}</span>
        </p>
        <p>
          Phone: <span>{props.alter}</span>
        </p>
        <p>
          Role: <span>{props.author}</span>
        </p>
        <p>
          Message: <span>{props.instruction}</span>
        </p>
        <p>
          Message: <span>{props.country}</span>
        </p>
        <p>
          Message: <span>{props.flag}</span>
        </p>
        <p>
          Message: <span>{props.description}</span>
        </p>
        <p>
          Message: <span>{props.likes}</span>
        </p>

        <button onClick={props.submit}>Yes, I am shure</button>
        <button onClick={props.close}>No, I don't want to post it</button>
      </div>
    </div>
  );
};

export default Popup;
