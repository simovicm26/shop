import React from "react";
import homeImage from "../logos/home-img.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="contentContainer">
        <h1>
          Everything you need in <span>one place</span>
        </h1>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
      <img src={homeImage} alt="" />
    </div>
  );
}
