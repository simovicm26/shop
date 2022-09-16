import React from "react";
import shoppingIcon from "../logos/cart.svg";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div className="Nav">
      <div className="shoppingContainer">
        <Link style={linkStyle} to="/">
          <h3>Home</h3>
        </Link>
        <Link style={linkStyle} to="/shop">
          <h3>Shop</h3>
        </Link>
      </div>
      <h1>
        Random <span>Shop</span>
      </h1>
      <div onClick={props.handleHidden} className="cart">
        <img width="25px" heigth="25px" src={shoppingIcon} alt="" />
      </div>
    </div>
  );
}
