import React, { useState } from "react";
import "./Input.css";

function Input({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div className="create-note">
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        type="text"
        placeholder="Title"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Add a note..."
        rows="3"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default Input;