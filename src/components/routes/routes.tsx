import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./../home/HomeServices";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
