import React, { Component } from "react";
import projects from "../../projects.json";
import Card from "../PageElements/Card";
import Wrapper from "../Wrapper"
//import Btn from "../PageElements/Button"

class Portfolio extends Component {
  state = {
    projects
  };
  
  render () {
    return (
 
      <Wrapper>
        <h1>Portfolio Page</h1>
          {this.state.projects.map(project => (
            <Card
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
      </Wrapper>
    );
  }
}

export default Portfolio;
