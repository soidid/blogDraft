import React from "react";
import Router, {Route, DefaultRoute} from "react-router";
import Application from "./Application";
import SingleArticle from "./SingleArticle";
import Home from "./Home";
import "./normalize.css";

const routes = (
  <Route name="app" path="/" handler={Application} >
    <Route name="article" path="/article/:articleID" handler={SingleArticle} />
    <DefaultRoute handler={Home} />
  </Route>
  );

const load = (routerState) => {
  return Promise.all(
    routerState.routes.filter((route) => {
      return route.handler.load;
    }).map((route) => {
      return route.handler.load(routerState.params);
    }));
};


Router.run(routes, (Handler, state) => {
  load(state).then(() => {
    React.render(
      <Handler {...state} />,
      document.getElementById("react-root")
      );
  });
});
