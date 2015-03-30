import React from "react";
import "./AboutSite.css";

export default React.createClass({
  displayName: "AboutSite",
  
  render() {
  	  var imgURL = "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/1504090_922738074406074_7665839227643434653_n.jpg?oh=f0706350b9b2c39734154cbdd9bc6ae9&oe=55A7F6A8&__gda__=1437631201_97d700bf5b77f0a823a8f85f3a3fbf80";
      
      return (
      <div className="AboutSite">
        <img className="AboutSite-img"
             src={imgURL} />
        <div className="AboutSite-content">
            <div className="AboutSite-title">公民學院部落格</div>
            <div className="AboutSite-info">生活中的人文閱讀，哲學、政治、社會、人類學的優質討論。</div>
            <div className="AboutSite-meta">第一次來？</div>
        </div>
      </div>
      );
  }
});