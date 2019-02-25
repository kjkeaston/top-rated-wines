import React from "react";
import { Switch, Route } from "react-router-dom";
import AllWines from "../components/AllWines.js";

export default (
  <Switch>
    <Route exact path="/" component={ AllWines }/>
  </Switch>
  )
