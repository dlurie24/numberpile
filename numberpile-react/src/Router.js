import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
export default () => {
  return (
    <>
      <Router>
        <Switch>
          <Route to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
