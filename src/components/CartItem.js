import React, { useEffect } from "react";
import minusIcon from "../logos/minus.svg";
import plusIcon from "../logos/plus.svg";

export default function CartItem(props) {
  return (
    <div id={props.item.id} className="itemContainer">
      <img className="contentImage" src={`images/${props.item.img}`} />
      <h3>{props.item.name}</h3>
      <div className="quantityContainer">
        <div className="reduce">
          <img width="25px" height="25px" src={minusIcon} alt="" />
        </div>
        <p>{props.item.quantity}</p>
        <div className="increase">
          <img width="25px" height="25px" src={plusIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
