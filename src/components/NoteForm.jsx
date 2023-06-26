import React, { Component } from "react";

class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-app__form">
        <h2>Buat Catatan</h2>
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <input
            className="input-judul"
            type="text"
            placeholder="Tuliskan judul catatanmu di sini..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="input-konten"
            placeholder="Tuliskan catatanmu di sini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button className="input-button" type="submit">
            Simpan
          </button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
