import React from "react";

function Backdrop(props) {
  function closeBackDrop() {
    props.closeModal();
  }

  return <div className="backdrop" onClick={closeBackDrop}></div>;
}

export default Backdrop;
