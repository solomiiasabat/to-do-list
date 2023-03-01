import React, { useState } from "react";
import "./TaskList.css";
import ModalWindow from "./ModalWindow";

export default function TaskList(props) {
  const [openModalWindow, setOpenModalWindow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handleChecked() {
    setIsChecked(true);
  }

  function handleOpen() {
    setOpenModalWindow(true);
  }

  function handleClose() {
    setOpenModalWindow(false);
  }

  let idCounter = 1;

  return (
    <section className="taskList">
      <div className="mainTaskTitles">
        <p className="main order">ID</p>
        <p className="main titles">TITLE</p>
        <p className="main descriptions">DESCRIPTION</p>
        <p className="main status">STATUS</p>
      </div>

      <div className="listOfTitles">
        {props.tasks.map((task) => {
          return (
            <div key={task.id} className="yourTask">
              <p className="task-line id-main">{idCounter++}</p>

              <p className="task-line title-main">{task.value1}</p>

              <p className="task-line description-main">
                <button className="modal-window" onClick={handleOpen}>
                  {task.value2}
                </button>
                <ModalWindow
                  open={openModalWindow}
                  content={task}
                  close={handleClose}
                  checkbox={isChecked}
                />
              </p>

              <p className="task-line status-main">
                <input type="checkbox" onClick={handleChecked}></input>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
