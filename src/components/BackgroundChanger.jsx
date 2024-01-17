import React, { Fragment, useState } from "react";
import spring from "../spring-forest.png";
import summer from "../summer-forest.png";
import fall from "../fall-forest.png";
import winter from "../winter-forest.png";

const backgroundImageUrls = [spring, summer, fall, winter];

const BackgroundChanger = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const changeBackground = () => {
    setCurrentImageIndex(
      currentImageIndex == 0
        ? 0
        : (currentImageIndex + 1) % backgroundImageUrls.length
    );
  };
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          background: `url(${backgroundImageUrls[currentImageIndex]}) no-repeat center center fixed`,
          backgroundSize: "cover",
          transition: "background 0.5s",
        }}
      >
        <button onClick={changeBackground}>
          <img src={spring} alt="spring" style={{ width: 100, height: 100 }} />
        </button>
        <button onClick={changeBackground}>
          <img src={summer} alt="spring" style={{ width: 100, height: 100 }} />
        </button>
        <button onClick={changeBackground}>
          <img src={fall} alt="spring" style={{ width: 100, height: 100 }} />
        </button>
        <button onClick={changeBackground}>
          <img src={winter} alt="spring" style={{ width: 100, height: 100 }} />
        </button>
      </div>
    </Fragment>
  );
};

export default BackgroundChanger;
