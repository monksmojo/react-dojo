import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function TodoCard(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  function closeModalHandler(){
    setModalOpen(false)
  }

  function openModalHandler() {
    setModalOpen(true);
  }

  return (
    <>
      {isModalOpen && <Modal closeModal={closeModalHandler} />}
      {isModalOpen && <Backdrop closeModal={closeModalHandler} />}
      <div className="card">
        <h2>{props.text}</h2>
        <div className="action">
          <button className="btn" onClick={openModalHandler}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
