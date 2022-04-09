import React from "react";

function Child(props) {
  console.log("child component is rendered");
  return (
    <>
      <h1>Child Count is {props.childCount}</h1>
    </>
  );
}

export default React.memo(Child);
