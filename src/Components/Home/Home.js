import React, { Component } from "react";
import MyCard from "../MyCard/MyCard";
import "./Home.css"

function Home() {
  return (
    <div className="HomeStyles">
      <MyCard ott="Netflix" color="#E50914" />
      <MyCard ott="Prime" color="#00A8E1" />
      <MyCard ott="Anime" color="#FF7F50" />
    </div>
  );
}

export default Home;
