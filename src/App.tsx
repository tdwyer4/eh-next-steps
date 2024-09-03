import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import SplineHero from "./pages/SplineHero";
import { TextParallaxContentExample } from "./pages/ParallaxPage";

function App() {
  return (
    <>
      <SplineHero />
      <TextParallaxContentExample />
    </>
  );
}

export default App;
