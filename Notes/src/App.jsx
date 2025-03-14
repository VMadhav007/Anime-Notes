import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import Input from "./components/Input";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from local storage on mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to local storage
  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  // Add a new note
  const addNote = (note) => {
    if (note.title && note.content) {
      const newNote = { ...note, id: Date.now() }; // Unique ID using timestamp
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      saveNotesToLocalStorage(updatedNotes);
    }
  };

  // Delete a note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  return (
    <>
      <Header />
      <Input onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
