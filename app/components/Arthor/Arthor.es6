import React from "react";
import "./Arthor.css";

//http://community.citizenedu.tw/users/kris/activity
import arthor from "./Arthor.json";;

export default React.createClass({
  displayName: "Arthor",
  
  render() {
      //console.log(arthor.user.bio_excerpt);
      //console.log(arthor.user.bio_raw);
      var result = "";
      if(this.props.type === "section"){
          result = (
              <div className="Arthor">
                 <div dangerouslySetInnerHTML={{__html: arthor.user.bio_excerpt}}></div>
                 <div className="Arthor-showFullBio">看完整作者介紹</div>
              </div>
          )
      }else if(this.props.type === "widget"){
          result = (
              <div className="Arthor-widget">
                  <a className="Arthor-widgetLink">朱家安</a>・發表於<a className="Arthor-widgetLink">沃草烙哲學</a>
              </div>
          )

      }else{
        //no op
      }


      return result;
  }
});