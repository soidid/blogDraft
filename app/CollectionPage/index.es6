import React from "react";
import {Link} from "react-router";
import AppBar from "../components/AppBar/AppBar.es6";
import AboutSite from "../components/AboutSite/AboutSite.es6";
import List from "../components/List/List.es6";
import Tags from "../components/Tags/Tags.es6";
import Columns from "../components/Columns/Columns.es6";

export default React.createClass({
  displayName: "CollectionPage",

  
  render() {
    
    return (
      <div>
        <AppBar type="nav"/>
        <AboutSite />
        <Columns type="collection"/>
         
      </div>
    );
  }
});