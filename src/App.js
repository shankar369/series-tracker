import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./Components/MyCard";
import Netflix from "./Pages/Netflix";
// import NewCard from "./Components/NewCard"
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Card, ListGroup, Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/">
            <Home />
          </Link>

          <Link to="/netflix">
            <NetflixHandler />
          </Link>

          <Switch>
            <Route exact path="/" />
            <Route path="/netflix" />
          </Switch>
        </Router>
      </div>
    );
  }
}

function NetflixHandler() {
  return <Netflix />;
}

function Home() {
  return (
    <div>
      <MyCard ott="Netflix" color="#E50914" />
      {/* </Link> */}
      {/* <Link to="/prime"> */}
      <MyCard ott="Prime" color="#00A8E1" />
      {/* </Link> */}
      {/* <Link to="/anime"> */}
      <MyCard ott="Anime" color="#FF7F50" />
      {/* </Link> */}
    </div>
  );
}

export default App;
