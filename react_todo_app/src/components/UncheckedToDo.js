import React, { useContext } from 'react';
import ToDo from '../components/ToDo';
import { ToDoContext } from '../context_providers/TodoContext'

const UncheckedToDo = (props) => {

    const contextValues = useContext(ToDoContext);

    const ToDos = contextValues.toDoItems.map((toDoItem) => {
        if (!toDoItem.completed) {

            return <ToDo key={toDoItem.taskTitle}
                task={toDoItem}
                done={() => contextValues.checkToDoItemHandler(toDoItem.taskTitle)}
                closed={() => contextValues.removeToDoItemHandler(toDoItem.taskTitle)}
            />
        }
        return null;
    });

    return (
        <>
            {ToDos}
        </>
    );

}

export default UncheckedToDo;  