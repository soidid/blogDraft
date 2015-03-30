import React from "react";
import "./AppBar.css";

export default React.createClass({
  displayName: "AppBar",
  
  render() {
      
      var result = <div></div>;
      var type = this.props.type;

      if(type === "simple"){
      	result = (
      	  <div className="AppBar">
            <a href="#/"
               className="AppBar-logo">公民學院部落格</a>
          </div>
        );

      }else if(type === "nav"){
      	result = (
      	  <div className="AppBar">
            <a href="#/"
               className="AppBar-logo">公民學院部落格</a>
            <a href="#/"
               className="AppBar-nav">最新</a>
            <a href="#/columns"
               className="AppBar-nav">專欄</a>
            <a href="#/"
               className="AppBar-nav">Collections</a>
          </div>
        );

      }else{
      	//
      }

      return (
        result
      );
  }
});