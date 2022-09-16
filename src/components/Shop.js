import React from "react";
import Card from "./Card.js";
import { data } from "./Data";

export default function Shop(props) {
  return (
    <div className="Shop">
      <h1>Shop Items</h1>

      <div className="itemsContainer">
        {data.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            name={item.name}
            handleHidden={props.handleHidden}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
