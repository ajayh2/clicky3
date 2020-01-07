import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail" alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)}/>
    </div>
  </div>
);

export default Card;
