import React, { Component } from "react";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils";
import NoteContent from "./NoteContent";

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader />
        <NoteContent
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
