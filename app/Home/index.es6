import React from "react";
import {Link} from "react-router";
import AppBar from "../components/AppBar/AppBar.es6";
import AboutSite from "../components/AboutSite/AboutSite.es6";
import List from "../components/List/List.es6";
import Tags from "../components/Tags/Tags.es6";

export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      tag: ""
    };
  },

  _onChangeTag (i, event){
    console.log(i);
    this.setState({
      tag: i
    });
  },

  render() {
    console.log(window.innerWidth);
    var result = "";

    if(window.innerWidth > 1000){
        result = (
        <div>
            <AppBar type="nav"/>
            <AboutSite />
            <Tags changeTagHandler={this._onChangeTag}/>
            <List type="index"
                  tag={this.state.tag}/>
        </div>);
        
    }else{
        result = (
        <div>
            <AppBar type="nav"/>
            <AboutSite />
            <List type="index"
                  tag={this.state.tag}/>
            <Tags changeTagHandler={this._onChangeTag}/>
        
        </div>);
    }
    
    return (
      
        result
      
    );
  }
});