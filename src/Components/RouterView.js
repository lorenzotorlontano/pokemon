import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home/home";
import DetailsPokemon from "../Pages/DetailsPokemon/detailsPokemon";
import Login from "../Pages/Login/login";
function RouterView() {
  return (
    <Router>
      <Switch>
        <Route path="/detailsPokemon/:id">
          <DetailsPokemon />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterView;
