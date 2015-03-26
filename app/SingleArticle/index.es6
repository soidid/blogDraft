import React from "react";
import Router, {RouteHandler, State} from "react-router";
import "./normalize.css";
import Article from "../components/Article/Article.es6";

export default React.createClass({
  displayName: "SingleArticle",

  render() {

    return (
      <div>
       
        <Article />
        <RouteHandler {...this.props} {...this.state} />
      </div>
    );
  }
});