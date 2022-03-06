import React, { useContext } from 'react'
import ToDo from './ToDo';
import { ToDoContext } from '../context_providers/TodoContext'
const ToDoList = (props) => {
    const contextValues = useContext(ToDoContext)
    console.log(contextValues);

    const ToDos = contextValues.toDoItems.map((toDoItem) => {
        return <ToDo key={toDoItem.taskTitle}
            task={toDoItem}
            done={() => contextValues.checkToDoItemHandler(toDoItem.taskTitle)}
            closed={() => contextValues.removeToDoItemHandler(toDoItem.taskTitle)}
        />
    });


    return (
        <>
            {ToDos}
        </>
    );
}

export default ToDoList;