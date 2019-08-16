import React from "react";
import "../styles/hero.css";
import bgImg from "../images/bg_img.png";

export const Hero: React.FC = () => {
  return (
    <div
      className="Hero-Container Hero-BackgroundImg"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1>Hello World</h1>
    </div>
  );
};
