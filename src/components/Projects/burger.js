import React from "react";
import burgerPic from "./assets/eat-da-burger.png"

const Burger = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={burgerPic}
        alt="Eat-Da-Burger"
      />
      <div className="card-body">
        <h5 className="card-title">Eat-Da-Burger</h5>
        <p className="card-text"></p>
        <a
          href="https://burgertimetake2.herokuapp.com/burgers"
          className="btn btn-primary"
        >
          Link to Heroku App
        </a>
        <a
          href="https://github.com/hunterwk/burger-time"
          className="btn btn-primary"
        >
          Link to Github Repo
        </a>
      </div>
    </div>
  );
};

export default Burger;
