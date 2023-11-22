import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();
      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.error("Oh no an error! ", err);
      throw err;
    }
  }

  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  function App() {
    return (
      <div>
        {/* any other components we add in future */}
        <AddItemForm />
        <EditItemForm />
      </div>
    );
  }

  return (
    <main>
      <div className="sauce-section">
        damien-newnham
        <h1>Sauce Store</h1>
        <h2>All things 🔥</h2>
        <SaucesList sauces={sauces} />
      </div>
      <div className="item-section">
        <h1>Items Store</h1>
        <h2>Available items</h2>
        <ItemsList items={items} />

        <h1>Sauce Store</h1>
        <h2>All things 🔥</h2>
        <div className="container">
          <SaucesList sauces={sauces} />
        </div>
      </div>
      <div className="item-section">
        <h1>Items Store</h1>
        <h2>Available items</h2>
      </div>
    </main>
  );
};
