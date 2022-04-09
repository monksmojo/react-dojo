import { useState } from "react";

import styles from "./Form.module.css";

function Form(props) {
  const [todo, setTodo] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addToTodoList(todo);
    setTodo("");
  };

  return (
    <div className={styles.todoForm}>
      <form onSubmit={onSubmitHandler}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder="Add Todo Item"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className={styles.todoButton} type="submit">
          Add To Do Item
        </button>
      </form>
    </div>
  );
}

export default Form;
