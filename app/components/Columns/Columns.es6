import React from "react";
import "./Columns.css";

import Columns from "./Columns.json";
export default React.createClass({
  displayName: "Columns",
  
  render() {
  	  var columnItems = Columns.map((item,key)=>{
          return (
          	 <div className="Column">

             	<div className="Column-name">{item.name}</div>
             	<div className="Column-intro">{item.intro}</div>
             </div>
          )
  	  });
      return (
      <div className="Columns">
          {columnItems}
      </div>
      );
  }
});