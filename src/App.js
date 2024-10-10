import React from "react";
// import Navbar from "./components/Navbar";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  HomePage,
  Navbar,
  News,
} from "./components";
import "./App.css";
import { Router, Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        {/* <Layout>
          <div className="router">
            <Routes>
              <Route exact path="/">
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/Cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/Crypto/:coinId">
                <CryptoDetails></CryptoDetails>
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Routes>
          </div>
        </Layout> */}
        <Layout>
          <div className="router">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoVerse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/">Exchanges</Link>
            <Link to="/">News</Link>
            <Link to="/">Home</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
