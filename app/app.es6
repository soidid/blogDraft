import React from "react";
import Router, {Route, DefaultRoute} from "react-router";
import Application from "./Application";
import ArticlePage from "./ArticlePage";
import AuthorPage from "./AuthorPage";
import ColumnPage from "./ColumnPage";
import Home from "./Home";
import "./normalize.css";

const routes = (
  <Route name="app" path="/" handler={Application} >
    <Route name="article" path="/article/:articleId" handler={ArticlePage} />
    <Route name="author" path="/author/:authorId" handler={AuthorPage} />
    <Route name="columns" path="/columns" handler={ColumnPage} />
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
