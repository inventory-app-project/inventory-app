import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { ItemsList } from "./ItemsList";
import AddItemForm from "./AddItemForm";
import apiURL from "../api";
import EditItemForm from "./EditItemForm";
import "./styles.css";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);

  const deleteItem = async (itemId) => {
    try {
      const response = await fetch(`${apiURL}/items/${itemId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Update items state to remove the deleted item
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Function to fetch sauces data
  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();
      setSauces(saucesData);
    } catch (err) {
      console.error("Error fetching sauces: ", err);
    }
  }

  // Function to fetch items data
  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.error("Error fetching items: ", err);
    }
  }

  // UseEffect hook to fetch data on component mount
  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

  function App() {
    return (
      <main>
        <div className="sauce-section">
          <h1>Sauce Store</h1>
          <h2>All things 🔥</h2>
          <div className="container">
            <SaucesList sauces={sauces} />
          </div>
        </div>
        <div className="item-section">
          <h1>Items Store</h1>
          <h2>Available items</h2>
          <ItemsList items={items} />
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={deleteItem} />
          ))}
        </div>
        <AddItemForm />
        <EditItemForm />
      </main>
    );
  }
};
