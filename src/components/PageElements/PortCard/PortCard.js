import React from "react";
import "./style.css";

function PortCard(props) {
  return (
      <div className="card">
        <div className="img-container card-img-top">
          <img alt={props.title} id= "image1" src={props.image} />
          <img alt={props.title} id= "image2" src={props.image2} />

        </div>
        <div className="content">
          <dl>
            <dt>
              <strong>Project Title:</strong> {props.title}
            </dt>
            <dt>
              <strong>Scope:</strong> {props.scope}
            </dt>
            
          </dl>
          <div className="row justify-content-center">
            <div className="col-4">
              <a href={props.url} className="btn btn-primary">Link</a> 
            </div>
            <div className="col-4">
              <a href={props.github} className="btn btn-primary">Github</a>
            </div>
          </div>
        </div>
      </div>
    )
  };

export default PortCard;
