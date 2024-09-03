import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { TextParallaxContentExample } from "./pages/ParallaxPage";

function App() {
  return (
    <>
      <TextParallaxContentExample />
      <HomePage />
    </>
  );
}

export default App;
