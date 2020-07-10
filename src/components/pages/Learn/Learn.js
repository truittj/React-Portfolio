import React from "react";
import linkedIn from "../../../img/link.png"
import GitHub from "../../../img/github.png";
import Resume from "../../../img/resume.png";
import "./style.css"

function Learn() {
  return (
    <div>
      <h1 className="text-center">Other Places You Can Reach Me</h1>
      
        <a href="https://www.linkedin.com/in/joel-truitt-19312a62/">
        <img id="linkedIn" alt="linkedIn Logo" src={linkedIn} />
        </a>
        <a href="https://github.com/truittj">
        <img id="GitHub" alt="GitHub Logo" src={GitHub} />
        </a>
        <a href="/resume">
            <img alt="resume" width= "8%" id="resume" src={Resume} />
        </a>
    </div>
  );
}

export default Learn;
