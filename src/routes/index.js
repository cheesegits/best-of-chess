import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";

// Using <Switch> instead of "exact" attribute
// "render" attribute is also availale for <Switch>
export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);
