import forest from "./spring-forest.png";
import seal from "./seal.svg";
import React, { useState, useEffect } from "react";

import "./App.css";

const RandomImages = ({ imageSrc, count }) => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    const generatePositions = () => {
      const newPositions = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        newPositions.push({ x, y });
      }
      return newPositions;
    };

    setPositions(generatePositions());
  }, [count]);
  return (
    <>
      <div>
        {positions.map((position, index) => (
          <img
            key={index}
            src={imageSrc}
            alt="seal"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          />
        ))}
      </div>
    </>
  );
};
export default function App() {
  const imgageSrc = seal;
  return (
    <div>
      <img
        src={forest}
        alt="forest"
        style={{ width: "100%", height: "auto" }}
      ></img>
      <RandomImages imageSrc={imgageSrc} count={10} />;
    </div>
  );
}
