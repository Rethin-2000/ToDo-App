import React, { useState } from "react";
import "./App.css";
import AddItem from "./AddItem"; // Import the AddItem component

function App() {
  const [items, setItems] = useState([]); // State to store list items

  // Function to add item
  const addItem = (val) => {
    if (val.trim() === "") return; // Prevent empty values
    const newItem = { id: Date.now(), text: val }; // Create item with unique ID
    setItems([...items, newItem]); // Update the list
  };

  // Function to delete item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id)); // Remove item by filtering
  };

  return (
    <div className="main-container">
      <AddItem add={addItem} /> {/* Pass add function as prop */}

      <ol id="list">
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button id="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
