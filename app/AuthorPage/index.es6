import React from "react";
import Router, {RouteHandler, State} from "react-router";

import AppBar from "../components/AppBar/AppBar.es6";
import Author from "../components/Author/Author.es6";

export default React.createClass({
  displayName: "SingleArticle",

  render() {

    return (
      <div>
        <AppBar type="simple"/>
        <Author type="page" />
        <RouteHandler {...this.props} {...this.state} />
      </div>
    );
  }
});