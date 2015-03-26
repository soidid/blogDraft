import React from "react";
import {Link} from "react-router";
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
        <Link to="article" params={{articleId: 1}}>作者已死：評論藝術作品，需要看作者臉色嗎？</Link>
      </div>
   );
  }
});