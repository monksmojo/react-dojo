import React from "react";
import TodoCard from "./component/TodoCard";

function App() {
  return (
    <div>
      <TodoCard text="practice" />
      <TodoCard text="react" />
      <TodoCard text="python" />
    </div>
  );
}

export default App;
