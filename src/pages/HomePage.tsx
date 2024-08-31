import React from "react";
import "./HomePage.css";
import EHLogo from "../assets/svg/EH-Logo-BG";

function HomePage() {
  return (
    <div className="mainContainer">
      <EHLogo />
      <div className="headerContainer">
        <h2>We'll take it from here</h2>
        <h6>You did the easy part – Here's what's next.</h6>
      </div>
    </div>
  );
}

export default HomePage;
