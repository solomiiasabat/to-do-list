import React, { useState } from "react";
import "./InputBar.css";
import TaskList from "./TaskList";

export default function InputBar() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [requiredTitle, setRequiredTitle] = useState("");

  function handleTaskChange(event) {
    setTaskTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setTaskDescription(event.target.value);
  }

  function addDownTasks() {
    if (taskTitle.length === 0) {
      setRequiredTitle(true);
    }

    if (!taskTitle || !taskDescription) {
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      value1: taskTitle,
      value2: taskDescription,
    };

    setTasks((oldList) => [...oldList, newTask]);
    setTaskTitle("");
    setTaskDescription("");
  }

  return (
    <section className="input_bar">
      <div className="container">
        <div className="title_form">
          <p className="title">Title</p>
          <input
            type="search"
            placeholder=" Enter title"
            className="title-engine"
            value={taskTitle}
            onChange={handleTaskChange}
          ></input>
          {requiredTitle ? <p className="required">This field is empty</p> : ""}
        </div>

        <div className="description_form">
          <p className="description">Description</p>
          <input
            type="search"
            placeholder=" Enter description"
            className="description-engine"
            value={taskDescription}
            onChange={handleDescriptionChange}
          ></input>
        </div>

        <div>
          <p className="to-hide">****</p>
          <button
            type="button"
            className="create-button"
            onClick={addDownTasks}
          >
            Create
          </button>
        </div>
      </div>
      <TaskList tasks={tasks} />
    </section>
  );
}
