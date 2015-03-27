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
        <ul>
          <li><Link to="article" params={{articleId: 1}}>作者已死：評論藝術作品，需要看作者臉色嗎？</Link></li>
          <li><Link to="author" params={{authorId: 1}}>作者頁面</Link></li>
        </ul>
      </div>
   );
  }
});