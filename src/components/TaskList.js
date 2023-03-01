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
        <p className="order">ID</p>
        <p className="titles">TITLE</p>
        <p className="descriptions">DESCRIPTION</p>
        <p className="status">STATUS</p>
      </header>

      <ol className="listOfTitles">
        {props.tasks.map((task) => {
          return (
            <li key={task.id} className="yourTask">
              <p>{task.id}</p>
              <p>{task.value1}</p>
              <p>
                <button className="modal-window" onClick={handleOpen}>
                  {task.value2}
                </button>
                <ModalWindow
                  open={openModalWindow}
                  content={task}
                  close={handleClose}
                />
              </p>

              <p>
                <input type="checkbox"></input>
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
