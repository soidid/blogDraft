import React from "react";

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
        HOME
        <a href="#/article/1">文章</a>
      </div>
   );
  }
});