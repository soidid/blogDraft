import React from "react";
import Arthor from "../Arthor/Arthor.es6";

import "./Article.css";

//http://community.citizenedu.tw/t/topic/102/10
//http://community.citizenedu.tw/t/topic/767/17
import article from "./Article.json";;

export default React.createClass({
  displayName: "Article",
  
  render() {
      var data = article;
      var size = 120;//size=45,120
      var avatarTemplate = article.avatar_template.split('{size}')[0]+"/"+size+"/"+article.avatar_template.split('{size}')[1];
      var imgURL = "http://community.citizenedu.tw"+avatarTemplate;
        
      return (
      <div className="Article">
         <div className="Article-content">
            <div dangerouslySetInnerHTML={{__html: data.cooked}}></div>
         </div>
         <div className="Article-authorWrapper">
            <div className="Article-author">
               <div className="Article-authorHeader">
                  <img className="Article-avatar"
                       src={imgURL} />
                  <div className="Article-info">
                     <div className="Article-name">{data.name}</div> 
                     <div className="Article-date">發表於 {data.created_at.split('T')[0]}</div>
                  </div>
               </div>
               <Arthor />
            </div>
            
         </div>
         <div className="Article-footer">
               <div className="Article-button"
                    onClick={this._onSetNewMax}>與我們討論這篇文章</div>
         </div>
         
      </div>
      );
  }
});