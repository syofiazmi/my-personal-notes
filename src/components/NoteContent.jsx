import React from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const NoteContent = ({ notes, addNote, onDelete }) => {
  return (
    <div className="note-app__container">
      <div className="note-app__content">
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} id={notes.id} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default NoteContent;
