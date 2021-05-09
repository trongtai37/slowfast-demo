import React from "react";
import { Redirect, Route, Switch } from "react-router";
import PlayGround from "../Containers/PlayGround";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/playground" component={PlayGround} />
      <Redirect to="/playground" />
    </Switch>
  );
};

export default AppRoute;
