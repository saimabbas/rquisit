import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import LearnNFTs from "./views/LearnNFTs";

function App() {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/learnnfts" element={<LearnNFTs />} />
        </Routes>
      </Switch>
    </>
  );
}

export default App;
