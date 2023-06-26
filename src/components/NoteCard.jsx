import React from "react";
import { showFormattedDate } from "../utils";
import NoteButton from "./NoteButton";

const NoteCard = ({ title, createdAt, body, id, onDelete }) => {
  return (
    <div className="note-app__card">
      <div className="note-app__detail">
        <p className="note-app__title">{title}</p>
        <p className="note-app__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="note-app__body">{body}</p>
      </div>
      <NoteButton id={id} onDelete={onDelete} />
    </div>
  );
};

export default NoteCard;
