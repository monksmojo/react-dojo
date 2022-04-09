import { useState } from "react";
function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setToDoList] = useState([]);

  const addTodoHandler = (event) => {
    event.preventDefault();
    setToDoList([...todoList, todoText]);
    setTodoText("");
  };

  let todoListJsx = todoList.map((todo) => {
    return <h3>{todo}</h3>;
  });

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value )}
        />
        <input type="submit" value="add ToDo" />
      </form>
      <div>{todoListJsx}</div>
    </>
  );
}

export default ToDoForm;
