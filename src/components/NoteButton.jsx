import React from "react";

const NoteButton = ({ id, onDelete }) => {
  return (
    <div className="note-app__button">
      <p className="note-app__button-delete" onClick={() => onDelete(id)}>
        Delete
      </p>
    </div>
  );
};

export default NoteButton;
