import React from "react";
import Btn from "../PageElements/Button"
//import { classes } from '@material-ui/core';


function Home() {
  return (
    <div>
      <h1>Not your average bootcamp graduate</h1>
      <button type="button">View My Work</button>
      <Btn />
      {/* <div className={classes.root}>{"This div's text looks like that of a button."}</div> */}
    </div>
  );
}

export default Home;
