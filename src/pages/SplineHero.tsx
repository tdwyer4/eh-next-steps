import React from "react";
import Spline from "@splinetool/react-spline";
import "./SplineHero.css";

function SplineHero() {
  return (
    <div className="splineTrack">
      <Spline scene="https://prod.spline.design/ljBCZPfzU8ZWXhR2/scene.splinecode" />
    </div>
  );
}

export default SplineHero;
