import React from "react/addons";

import "./Tags.css";
import Tags from "./Tags.json";

export default React.createClass({
  displayName: "Tags",

  getInitialState(){
       return {
          
       }
  },

  render() {
      
      var tagsItem = Tags.map((item, key)=>{
          var boundClick = this.props.changeTagHandler.bind(null, item);
          return (
            <div className="Tags-Tag"
                 onClick={boundClick}
                 key={key}>{item}</div>
          )
      });
      
      return (
        <div className="Tags">
          <div className="Tags-title">熱門標籤</div>
          {tagsItem}
        </div>
      );
  }
});