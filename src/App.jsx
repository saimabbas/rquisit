import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import LearnNFTs from "./views/LearnNFTs";
import DigitalFashion from "./views/DigitalFashion";
import About from "./views/About";
import ProductPage1 from "./views/ProductPage1";
import ProductPage2 from "./views/ProductPage2";
import ProductPage3 from "./views/ProductPage3";
import ProductPage4 from "./views/ProductPage4";
import Legal from "./views/Legal";

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
          <Route exact path="/productpage2" element={<ProductPage2 />} />
          <Route exact path="/productpage3" element={<ProductPage3 />} />
          <Route exact path="/productpage4" element={<ProductPage4 />} />
          <Route exact path="/legal" element={<Legal />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
