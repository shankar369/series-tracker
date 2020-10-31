import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Netflix from "./Components/Netflix/Netflix";
import Prime from "./Components/Prime/Prime";
import Anime from "./Components/Anime/Anime";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/netflix" component={Netflix} />
        <Route exact path="/prime" component={Prime} />
        <Route exact path="/anime" component={Anime} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
