import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <GridDiv className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </GridDiv>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

const GridDiv = styled.div`
Header, Main, Footer {
  z-index: 1;
}
`;
