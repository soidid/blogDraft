import React from "react/addons";
//import Router, {RouteHandler, State} from "react-router";

import Arthor from "../Arthor/Arthor.es6";
import Comments from "../Comments/Comments.es6";
import Social from "../Social/Social.es6";

import "./Article.css";

//http://community.citizenedu.tw/t/topic/102/10
//http://community.citizenedu.tw/t/topic/767/17
import article from "./Article.json";;

export default React.createClass({
  displayName: "Article",

  getInitialState(){
       return {
          commentTop: 0
       }
  },

  _onGoToComment(){
      //console.log("Comments");
      //var commentNode = document.getElementByClass("Comments");
      //console.log(commentNode);
      window.scrollTo(0, this.state.commentTop);

  },

  _onCommentsMounted(top){
      //console.log("Comments Mounted: "+top);
      this.setState({
         commentTop: top
      });
  },
  
  render() {
      var data = article;
      var size = 120;//size=45,120
      var avatarTemplate = article.avatar_template.split('{size}')[0]+"/"+size+"/"+article.avatar_template.split('{size}')[1];
      var imgURL = "http://community.citizenedu.tw"+avatarTemplate;
    
      return (
      <div>

          <div className="Article">
            <Arthor type="widget"/>
            
            <div className="Article-cover">
                <img className="Article-coverImg"
                     src="https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/10514156_978580618821819_5686475740468114136_o.jpg" /> 
            </div>
            
            <Social goToCommentHandler={this._onGoToComment}/>

            <div className="Article-content">
              
              <div dangerouslySetInnerHTML={{__html: data.cooked}}></div>
            </div>
            <div className="Article-authorBackground">
            <div className="Article-author">
               <div className="Article-authorHeader">
                  <img className="Article-avatar"
                       src={imgURL} />
                  <div className="Article-info">
                     <div className="Article-name">{data.name}</div> 
                     <div className="Article-date">發表於 {data.created_at.split('T')[0]}</div>
                  </div>
               </div>
               <Arthor type="section"/>
            </div>   
            </div>
            <Comments commentMountHandler={this._onCommentsMounted}/>
          
          </div> 
      </div>
      );
  }
});