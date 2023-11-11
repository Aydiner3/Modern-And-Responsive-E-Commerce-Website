import React from "react";
import "./products.scss";
import Playstation from "../../assets/products/playstation.png";
import Headphone from "../../assets/products/headphone.png";
import Vision from "../../assets/products/vision.png";
import Macbook from "../../assets/products/macbook.svg";

const Products = () => {
  return (
    <div className="products-container">
      <div className="left">
        <div className="playstation">
          <img src={Playstation} alt="playstation" />
          <div className="play-content">
            <h3>Playstation 5</h3>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="others">
          <div className="headphones">
            <img src={Headphone} alt="headphone" />
            <div>
              <h3>Apple AirPods <span>Max</span> </h3>
              <p>Computational audio. Listen, it's powerful</p>
            </div>
          </div>
          <div className="vision-pro">
            <img src={Vision} alt="vision" />
            <div>
              <h3>Apple Vision <span>Pro</span></h3>
              <p>An immersive way to experience entertainment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h3>Macbook <span>Air</span></h3>
        <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
        <a href="/">
            Shop Now
        </a>
        <img src={Macbook} alt="macbook" />
      </div>
    </div>
  );
};

export default Products;
