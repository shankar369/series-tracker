import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Netflix from "./Components/Netflix/Netflix";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/netflix" component={Netflix} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
