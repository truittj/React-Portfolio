import React from "react";

function Card(props) {
  return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Project Title:</strong> {props.name}
            </li>
            <li>
              <strong>Scoope:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
          </ul>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
        </span>
      </div>
    )
  };

export default Card;
