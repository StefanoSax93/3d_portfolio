import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="loader-container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p
        style={{
          fontSize: 16,
          color: "#f1f1f1",
          fontWeight: 800,
          transform: "translate(-30px,-130px)",
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
