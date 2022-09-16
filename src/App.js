import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { data } from "./components/Data.js";
import { Link, Switch, Route, Routes } from "react-router-dom";

function App() {
  const [shown, setShown] = React.useState(true);
  const [items, setItems] = React.useState([]);

  function handleHidden(e) {
    setShown((prevShown) => !prevShown);
    if (e.target.closest(".card")) {
      handleAddToCart(e);
    }
  }

  function handleQuantity(e) {
    setItems((prevItems) => {
      prevItems.map((item) => {
        if (item.id === +e.target.closest(".itemContainer").id) {
          if (e.target.closest(".increase")) {
            item.quantity = +item.quantity + 1;
          } else if (e.target.closest(".reduce")) {
            item.quantity = +item.quantity - 1;
          }
        }
        return item;
      });
      return checkQuantity(prevItems);
    });
  }

  function checkQuantity(items) {
    const itemsFiltered = items.filter((item) => item.quantity !== 0);
    return itemsFiltered;
  }

  function handleAddToCart(e) {
    const addedItem = e.target.closest(".card").id;
    if (items.some((item) => item.id === +addedItem)) {
      setItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === +addedItem) item.quantity += 1;
          return item;
        })
      );
    } else {
      setItems((prevItems) => [
        ...prevItems,
        ...data.filter((item) => item.id === +addedItem),
      ]);
    }
  }
  return (
    <div className="App">
      <Nav handleHidden={handleHidden} />
      <Cart
        handleQuantity={handleQuantity}
        shown={shown}
        items={items}
        handleHidden={handleHidden}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleHidden={handleHidden} />} />
      </Routes>
    </div>
  );
}

export default App;
