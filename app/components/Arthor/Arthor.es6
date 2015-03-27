import React from "react/addons";
import "./Arthor.css";
import $ from "jquery";

//http://community.citizenedu.tw/users/kris/activity
import arthor from "./Arthor.json";;

export default React.createClass({
  displayName: "Arthor",

  getInitialState(){
      return {
         scroll: false
      }
  },
  
  componentDidMount() {
    var ref = this.refs.ArthorWidget;
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
          var classSet = React.addons.classSet;
          var classes = classSet({
              "Arthor-widget" : true,
              "Arthor-widget--fixed": this.state.scroll
          });

          result = (
              <div className={classes}
                   ref="ArthorWidget">
                  <img className="Arthor-widgetAvatar"
                       src="http://okapi.books.com.tw/uploads/article/article10144_3.png" />
                  <div className="Arthor-widgetInfo">
                      <a className="Arthor-widgetLink">朱家安</a>・發表於<a className="Arthor-widgetLink">沃草烙哲學</a>
                  </div>
              </div>
          )

      }else{
        //no op
      }


      return result;
  }
});