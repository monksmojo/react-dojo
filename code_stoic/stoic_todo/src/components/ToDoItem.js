import styles from "./ToDoItem.module.css";

function ToDoItem(props) {
  const deleteHandler = () => {
    props.removeToDoItem(props.title);
  };
  return (
    <div className={styles.todoItem}>
      <h3>{props.title}</h3>
      <button onClick={deleteHandler} className={styles.deleteButton}>
        Done
      </button>
    </div>
  );
}

export default ToDoItem;
