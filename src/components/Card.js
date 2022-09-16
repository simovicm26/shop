import React from "react";

export default function Card(props) {
  return (
    <div id={props.id} className="card">
      <img src={`images/${props.img}`} alt="" />
      <div className="controlsContainer">
        <p>{props.name}</p>
        <button onClick={props.handleHidden}>Add to Cart</button>
      </div>
    </div>
  );
}
