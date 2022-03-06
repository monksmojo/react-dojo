import React from "react";

function Modal(props){
    return (
      <div className="modal">
        <p>Are u sure</p>
        <button className="btn btn--alt" onClick={props.closeModal}>
          Cancel
        </button>
        <button className="btn" onClick={props.closeModal}>
          Confirm
        </button>
      </div>
    );
}

export default Modal;