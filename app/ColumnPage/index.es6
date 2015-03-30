import React from "react";
import {Link} from "react-router";
import AppBar from "../components/AppBar/AppBar.es6";
import AboutSite from "../components/AboutSite/AboutSite.es6";
import Columns from "../components/Columns/Columns.es6";

export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      count: 0
    };
  },

  render() {
    
    return (
      <div>
        <AppBar type="nav"/>
        
        
        <AboutSite />
        <Columns />
        
      </div>
    );
  }
});