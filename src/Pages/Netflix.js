import React, { Component } from "react";
import MyCard from "./../Components/MyCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Netflix extends Component {
  render() {
    return (
      <div>
        <MyCard ott="Movies" color="#E50914" />
        <MyCard ott="Series" color="#00A8E1" />
      </div>
    );
  }
}

export default Netflix;
