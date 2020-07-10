import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import Form from "../PageElements/FormMultiline"

function Contact(props) {
  return (
    <div>
      <Form />
    
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;

