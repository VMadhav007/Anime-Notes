import React, { useState, useEffect } from "react";
import Waves from './Waves';
import Header from "./components/Header";
import Note from "./components/Note";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const addNote = (note) => {
    if (note.title && note.content) {
      const newNote = { ...note, id: Date.now() };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      saveNotesToLocalStorage(updatedNotes);
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  return (
    <div className="app-wrapper">
      <div className="bg-lines">
      </div>
      <Waves
  lineColor="LIGHTGREY"
  backgroundColor="rgba(255, 255, 255, 0.1)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={40}
  waveAmpY={20}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>
      <Header />
      <Input onAdd={addNote} />
      <div className="notes-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
