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
              <strong>Project Title:</strong> {props.Title}
            </li>
            <li>
              <strong>Scoope:</strong> {props.Scope}
            </li>
            <li>
              <strong src={props.url}>Link:</strong> {props.url}
            </li>
          </ul>
        </div>

      </div>
    )
  };

export default Card;
