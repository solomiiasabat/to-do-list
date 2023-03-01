import React from "react";
import "./ModalWindow.css";

export default function ModalWindow(props) {
  if (!props.open) {
    return null;
  }

  return (
    <section className="ModalWindow">
      <header className="modal-title">{props.content.value1}</header>
      <p className="modal-description">Description:</p>
      <p className="modal-description-text">{props.content.value2}</p>
      <p className="modal-status">
        Status:{" "}
        {props.checkbox ? (
          <input type="checkbox" checked="true"></input>
        ) : (
          <input type="checkbox"></input>
        )}
      </p>
      <button className="close-btn" onClick={props.close}>
        Close
      </button>
    </section>
  );
}
