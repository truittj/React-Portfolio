import React from "react";

function Card(props) {
  return (
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
          <img alt={props.title} src={props.image2} />

        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Project Title:</strong> {props.title}
            </li>
            <li>
              <strong>Scope:</strong> {props.scope}
            </li>
            <li>
              <strong src={props.url}>Link:</strong> {props.url}
            </li>
            <li>
              <strong src={props.github}>Link:</strong> {props.github}
            </li>
          </ul>
        </div>
      </div>
    )
  };

export default Card;
