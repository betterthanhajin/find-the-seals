import React, { Fragment, useState, useEffect } from "react";
import spring from "../spring-forest.png";
import summer from "../summer-forest.png";
import fall from "../fall-forest.png";
import winter from "../winter-forest.png";

const backgroundImageUrls = [spring, summer, fall, winter];

const BackgroundChanger = () => {
  let [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeBackground = (idx) => {
    setCurrentImageIndex((currentImageIndex = idx));
  };

  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImageUrls[currentImageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          transition: "background 0.5s",
        }}
      >
        <button className="forest" onClick={() => changeBackground(0)}>
          <div className="white-back"></div>
          <img src={spring} alt="spring" style={{ width: 100, height: 100 }} />
        </button>
        <button className="forest" onClick={() => changeBackground(1)}>
          <div className="white-back"></div>
          <img src={summer} alt="summer" style={{ width: 100, height: 100 }} />
        </button>
        <button className="forest" onClick={() => changeBackground(2)}>
          <div className="white-back"></div>
          <img src={fall} alt="fall" style={{ width: 100, height: 100 }} />
        </button>
        <button className="forest" onClick={() => changeBackground(3)}>
          <div className="white-back"></div>
          <img src={winter} alt="winter" style={{ width: 100, height: 100 }} />
        </button>
      </div>
    </Fragment>
  );
};

export default BackgroundChanger;
