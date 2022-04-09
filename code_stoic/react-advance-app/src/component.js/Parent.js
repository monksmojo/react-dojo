import { useState } from "react";
import Child from "./Child";

function Parent(props) {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const parentCountHandler = () => {
    setParentCount(parentCount + 1);
  };

  const childCountHandler = () => {
    setChildCount(childCount + 1);
  };

  return (
    <>
      <h1>Parent Component {parentCount}</h1>
      <button onClick={parentCountHandler}>increment parent count</button>
      <button onClick={childCountHandler}>Increment Child Count</button>
      <Child childCount={childCount} />
    </>
  );
}

export default Parent;
