import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import CodeResume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer"
import "./style.css";

function App() {
  return (
    
    <Router>
      <div>
        <NavTabs />
        <Route exact path={["/", "/React-Portfolio/"]} component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/resume" component={CodeResume} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
