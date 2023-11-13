import React from "react";
import "./banners.scss";
import Huawei from "../../assets/banners/huawei.png";
import AppleWatch from "../../assets/banners/apple-watch.png";

const Banners = () => {
  return (
    <div className="banners-container">
      <div className="item">
        <img src={Huawei} alt="huawei" />
        <img src={AppleWatch} alt="Apple-watch" />
        <span>Popular Products</span>
        <p>
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <a href="/">Shop Now</a>
      </div>
      <div className="item">
        <img src={Huawei} alt="huawei" />
        <img src={AppleWatch} alt="Apple-watch" />
        <span>Popular Products</span>
        <p>
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <a href="/">Shop Now</a>
      </div>
      <div className="item">
        <img src={Huawei} alt="huawei" />
        <img src={AppleWatch} alt="Apple-watch" />
        <span>Popular Products</span>
        <p>
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <a href="/">Shop Now</a>
      </div>
      <div className="item">
        <img src={Huawei} alt="huawei" />
        <img src={AppleWatch} alt="Apple-watch" />
        <span>Popular Products</span>
        <p>
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        <a href="/">Shop Now</a>
      </div>
    </div>
  );
};

export default Banners;
