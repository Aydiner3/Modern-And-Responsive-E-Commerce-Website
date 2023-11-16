import React, { useState } from "react";
import Down from "../../../assets/down.png";
import Up from "../../../assets/up.png";
import "./dropdown.scss";

const Dropdown = ({ name, data }) => {
  const [isActive, setIsActive] = useState();
  return (
    <div className="dropdown-container">
      <div className="sidebar-dropdown">
        <span>{name}</span>
        <img
          src={`${isActive ? Up : Down}`}
          alt="down-up"
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      <div className="dropdown-content">
        {isActive && (
          <div >
            <input type="text" placeholder="Search" />
            <div>
              {data.map((item, index) => (
                <div className="filter-item" key={index}>
                  <input type="checkbox" key={item.id} />
                  <span>{item.content}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
