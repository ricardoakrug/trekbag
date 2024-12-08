/* eslint-disable react/prop-types */
import Button from "./Button";
import { useRef } from "react";
import { useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add and item</h2>
      <input
        ref={inputRef}
        autoFocus={true}
        value={itemText}
        onChange={(event) => {
          setItemText(event.target.value);
        }}
        type="text"
        placeholder="Add a new item"
      />
      <Button>Add to list</Button>
    </form>
  );
}
