import React from "react";
import "./hero.scss";
import Phone from "../../assets/hero/phone.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <span>Pro.Beyond</span>
        <h1>Iphone 14 <s>Pro</s></h1>
        <p>Created to change everything for the better. For everyone</p>
        <a href="/">Shop Now</a>
      </div>
      <div className="image">
        <img src={Phone} alt="phone" />
      </div>
    </div>
  );
};

export default Hero;
