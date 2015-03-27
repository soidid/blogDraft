import React from "react/addons";
import "./Author.css";
import $ from "jquery";

//http://community.citizenedu.tw/users/kris/activity
import Author from "./Author.json";;

export default React.createClass({
  displayName: "Author",

  getInitialState(){
      return {
         scroll: false
      }
  },
  
  componentDidMount() {
    var ref = this.refs.AuthorWidget;
    if(!ref) return;

    var rect = ref.getDOMNode().getBoundingClientRect();
    var bottom = rect.bottom;
    var scroll = this.state.scroll;
    
    var _this = this;
    var cb = function(value){
        //console.log("callback:"+value);
        _this.setState({
            scroll: value
        });
    };

    $(window).scroll(function(event){
        // console.log("s"+$(this).scrollTop());
        // console.log(bottom);
        // console.log($(this).scrollTop() < bottom );
        // console.log(scroll);

        if( $(this).scrollTop() > bottom ){
            cb(true);
        }
        if( $(this).scrollTop() < bottom ){

            cb(false);
        }
    });
  },
  render() {
      //console.log(Author.user.bio_excerpt);
      //console.log(Author.user.bio_raw);
      var result = "";
      if(this.props.type === "section"){
          result = (
              <div className="Author">
                 <div dangerouslySetInnerHTML={{__html: Author.user.bio_excerpt}}></div>
                 <div className="Author-showFullBio">看完整作者介紹</div>
              </div>
          )

      }else if(this.props.type === "widget"){
          var classSet = React.addons.classSet;
          var classes = classSet({
              "Author-widget" : true,
              "Author-widget--fixed": this.state.scroll
          });

          result = (
              <div className={classes}
                   ref="AuthorWidget">
                  <img className="Author-widgetAvatar"
                       src="http://okapi.books.com.tw/uploads/article/article10144_3.png" />
                  <div className="Author-widgetInfo">
                      <a className="Author-widgetLink">朱家安</a>・發表於<a className="Author-widgetLink">沃草烙哲學</a>
                      <span className="Author-tagsSection">
                          <span className="Author-tags">／</span>
                          <a className="Author-tagLink">哲學</a>
                          <span className="Author-tags">・</span>
                          <a className="Author-tagLink">藝術</a>
                      </span>
                  </div>
              </div>
          )

      }else{
        //no op
      }


      return result;
  }
});