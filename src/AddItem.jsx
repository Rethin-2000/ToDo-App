import React, { useState } from "react";
import "./App.css";

function AddItem({ add }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    add(inputValue);
    setInputValue(""); // Clear input after adding
  };

  return (
    <div className="container">
      <input
      id="input"
        type="text"
        placeholder="Add your goal"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button id="add-btn" onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddItem;
