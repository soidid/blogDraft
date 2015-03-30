import React from "react/addons";
import Tags from "../Tags/Tags.es6";

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
      var result = <div></div>;
      var type = this.props.type;

      if(type === "article"){

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
        
        result = (
        <div className="List List-article">
          <div className="List-content">
              <div>{nextPostItem}</div>
              <div className="List-title"></div>
              {postItems}
          </div>
        </div>);

     }else if(type === "index"){
        var postItems = AuthorPost.map((item, key)=>{
            return(
                <a className="List-indexItem"
                   key={key}
                   href="#/article/1"  >
                     <div className="List-articleItemTitle List-boldTitle">{item.title} ／朱家安</div>
                     <div className="List-articleItemBrief">{item.brief}</div>
                     
                </a>
            )
        });
        
        result = (
        <div className="List List--index">

          <div className="List-indexContent">  
              {postItems}
          </div>

          <div className="List-footer">
              <div className="List-button">載入更多</div>
          </div> 
            

          
        </div>);

     }else{

     }
      
      
      return result;
  }
});