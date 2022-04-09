import ToDoItem from "./ToDoItem";

function ToDoItemList(props) {
  const removeToDoItemHandler = (todo) => {
    const updatedToDoList = props.todoList.filter((item) => {
      return item !== todo;
    });
    props.updateToDoList(updatedToDoList);
  };

  const todoItems = props.todoList.map((taskTitle, index) => (
    <ToDoItem
      key={index}
      title={taskTitle}
      removeToDoItem={removeToDoItemHandler}
    />
  ));

  return <div>{todoItems}</div>;
}

export default ToDoItemList;
