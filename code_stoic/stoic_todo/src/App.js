import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import ToDoItemList from "./components/ToDoItemList";

function App() {
  const [todoList, setToDoList] = useState([]);

  const addTodoListHandler = (todo) => {
    setToDoList([...todoList, todo]);
  };

  const updateTodoListHandler=(updatedTodoList)=>{
    setToDoList([...updatedTodoList])
  };

  return (
    <div>
      <Header />
      <Form addToTodoList={addTodoListHandler} />
      <ToDoItemList
        todoList={todoList}
        updateToDoList={updateTodoListHandler}
      />
    </div>
  );
}

export default App;
