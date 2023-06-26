import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-app__list-container">
      <h2>Catatan Aktif</h2>
      <div className="note-app__list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              {...note}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
