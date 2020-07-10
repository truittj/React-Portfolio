import React from "react";
import Btn from "../PageElements/Button"
//import { classes } from '@material-ui/core';


function Home() {
  return (
    <div>
      <h1>Not your average bootcamp graduate</h1>
      <a class="btn btn-primary" href="/portfolio" role="button">Checkout my work</a>      {/* <div className={classes.root}>{"This div's text looks like that of a button."}</div> */}
    </div>
  );
}

export default Home;
