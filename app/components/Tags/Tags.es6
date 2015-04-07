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
      var classSet = React.addons.classSet;
      var tagsItem = Tags.map((item, key)=>{
          var boundClick = this.props.changeTagHandler.bind(null, item);
          var tagClasses = classSet({
            "Tags-Tag": true,
            "is-active" : this.props.tag == item
          })
          return (
            <div className={tagClasses}
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