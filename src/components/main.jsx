import React from "react";
import { useState } from "react";
import "../styles/main.css";
import Navbar from "./Navbar";
import Home from "./Home";

const Main = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default Main;
