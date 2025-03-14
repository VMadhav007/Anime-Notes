import React, { useState } from "react";

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
      <br />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Add a note..."
      />
      <button onClick={handleAdd}>➕</button>
    </div>
  );
}

export default Input;
