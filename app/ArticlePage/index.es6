import React from "react";
import Router, {RouteHandler, State} from "react-router";
import Article from "../components/Article/Article.es6";
import AppBar from "../components/AppBar/AppBar.es6";


export default React.createClass({
  displayName: "SingleArticle",

  render() {

    return (
      <div>
        <AppBar type="simple"/>
        <Article />
        <RouteHandler {...this.props} {...this.state} />
      </div>
    );
  }
});