import React from "react";
import WrapperAbout from "../../components/WrapperAbout"
import Title from "../../components/Title"

function About() {
  return (
    <div>
      <Title />
        <WrapperAbout> 
          <div className="row justify-content-center">
            <div className="col-4">
              <h4>
                Howdy. My name is Joel Truitt. I recently graduated from Rice University's Fullstack Web Development Bootcamp. 
                Feel free to take a look at my work on the Portfolio page or reach out to me with the informtion on the Contact page. 
              </h4>
            </div>
            <div className="col-4">
              <h2>
                I am a hard-working, talented Fullstack Web Developer ready to build your next project.
              </h2>
            </div>
          </div>
        </WrapperAbout>
    </div>
  );
}

export default About;
