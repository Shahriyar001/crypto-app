import React from "react";
// import Navbar from "./components/Navbar";
import { Navbar } from "./components";
import "./App.css";
// import { Switch, Router, Link } from "react-router-dom";
// import { Layout, Typography, Space } from "antd";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <h1>main</h1>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
