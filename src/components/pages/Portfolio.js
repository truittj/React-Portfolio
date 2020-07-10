import React, { Component } from "react";
import projects from "../../data";
import PortCard from "../PageElements/PortCard/PortCard";
import Wrapper from "../Wrapper"
//import Btn from "../PageElements/Button"

class Portfolio extends Component {
  state = {
    projects
  };
  
  render () {
    return (
 
      <Wrapper>
        <div className="row">
          <div className="col-12">
            <h1>Portfolio Page</h1>
          </div>
          <div className="row justify-content-around">
          {this.state.projects.map(project => (
            <PortCard
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            image2={project.image2}
            scope={project.scope}
            url={project.url}
            github={project.github}
            />
            ))}
            </div>
        </div>
      </Wrapper>
    );
  }
}

export default Portfolio;
