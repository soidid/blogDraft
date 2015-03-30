import React from "react/addons";

import "./List.css";

//http://community.citizenedu.tw/users/kris/activity/posts
import AuthorPost from "./AuthorPost.json";
import NextPost from "./NextPost.json";

export default React.createClass({
  displayName: "List",

  getInitialState(){
       return {
          
       }
  },

  render() {
      
      var nextPostItem = <div className="List-nextItem">
        <div className="List-nextItemTitle">下一篇文章</div>
          <div className="List-nextPost">
            <div className="List-nextTitle">{NextPost.title}／朱家安</div>
            <div className="List-nextPreview">{ NextPost.brief+"..."}</div>
            
          </div>
      </div>;

      var postItems = AuthorPost.map((item, key)=>{
              return(
                  <a className="List-articleItem"
                     key={key}
                     href="#/article/1"  >
                       <div className="List-articleItemDate">{item.date}</div>
                       <div className="List-articleItemTitle">{item.title}</div>
                  </a>
              )
          });
      
      return (
      <div className="List">
          <div className="List-content">
              <div>{nextPostItem}</div>
              <div className="List-title"></div>
              {postItems}

          </div>
      </div>
      );
  }
});