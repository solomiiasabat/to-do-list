import React, { useState } from "react";
import "./InputBar.css";
import TaskList from "./TaskList";

export default function input_bar() {
  return (
    <section className="input_bar grid-wrapper">
      <form className="title_form">
        <p className="title">Title</p>
        <input
          type="text"
          placeholder="Enter title"
          className="title-engine"
        ></input>
      </form>

      <form className="description_form">
        <p className="description">Description</p>
        <input
          type="text"
          placeholder="Enter description"
          className="description-engine"
        ></input>
      </form>

      <button className="create_button" type="button">
        Create
      </button>
    </section>
  );
}
