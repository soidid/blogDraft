import React from "react";
import "./Social.css";


export default React.createClass({
  displayName: "Social",
  
  render() {

     
      return (
      <div className="Social">
          <div className="Social-socialSets">
            <div className="Social-social">5 討論</div>
            <div className="Social-social">48 分享</div>
          </div>
      </div>
      );
  }
});