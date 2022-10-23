import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import LearnNFTs from "./views/LearnNFTs";
import DigitalFashion from "./views/DigitalFashion";
import About from "./views/About";
import ProductPage1 from "./views/ProductPage1";

function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/learnnfts" element={<LearnNFTs />} />
          <Route exact path="/digitalfashion" element={<DigitalFashion />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/productpage1" element={<ProductPage1 />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
