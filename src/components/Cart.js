import React from "react";
import closeIcon from "../logos/close.svg";
import CartItem from "./CartItem";

export default function Cart(props) {
  function handleChildClick(e) {
    e.stopPropagation();
  }

  React.useEffect(() => {
    function quantityCallback(e) {
      if (e.target.closest(".reduce") || e.target.closest(".increase"))
        props.handleQuantity(e);
    }
    const cartContainer = document.querySelector(".cartContainer");
    cartContainer.addEventListener("click", quantityCallback);
    return function () {
      cartContainer.removeEventListener("click", quantityCallback);
    };
  }, []);
  console.log(props.items);

  return (
    <div
      onClick={props.handleHidden}
      className={props.shown ? "hidden Cart" : "Cart "}
    >
      <div onClick={handleChildClick} className="cartContainer">
        <div onClick={props.handleHidden} className="closeButton">
          <img
            className="closeCart"
            src={closeIcon}
            width="45px"
            height="45px"
            alt=""
          />
        </div>
        <h1>Cart</h1>
        {props.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleQuantity={props.handleQuantity}
          />
        ))}
      </div>
    </div>
  );
}
