import React from "react";
import "./ModalWindow.css";

export default function ModalWindow(props) {
  if (!props.open) {
    return null;
  }
  return (
    <section className="ModalWindow">
      <header className="title">{props.content.value1}</header>
      <p className="description-title">Description:</p>
      <p className="description-text">{props.content.value2}</p>
      <p className="status">Status</p>
      <button className="close-btn" onClick={props.close}>
        Close
      </button>
    </section>
  );
}
