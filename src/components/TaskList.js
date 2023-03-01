import React, { useState } from "react";
import "./TaskList.css";
import ModalWindow from "./ModalWindow";

export default function TaskList(props) {
  const [openModalWindow, setOpenModalWindow] = useState(false);

  function handleOpen() {
    setOpenModalWindow(true);
  }

  function handleClose() {
    setOpenModalWindow(false);
  }

  return (
    <section className="taskList">
      <header className="mainTaskTitles">
        <p className="main order">ID</p>
        <p className="main titles">TITLE</p>
        <p className="main descriptions">DESCRIPTION</p>
        <p className="main status">STATUS</p>
      </header>

      <ol className="listOfTitles">
        {props.tasks.map((task) => {
          return (
            <li key={task.id} className="yourTask">
              <p className="task-line">
                <li></li>
              </p>

              <p className="task-line">{task.value1}</p>

              <p className="task-line">
                <button className="modal-window" onClick={handleOpen}>
                  {task.value2}
                </button>
                <ModalWindow
                  open={openModalWindow}
                  content={task}
                  close={handleClose}
                />
              </p>

              <p className="task-line">
                <input type="checkbox"></input>
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
