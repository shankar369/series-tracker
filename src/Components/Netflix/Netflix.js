import React, { Component } from "react";
import MyCard from "../MyCard/MyCard";

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
