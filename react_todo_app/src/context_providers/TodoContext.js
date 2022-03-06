import React, { useState } from 'react';
import toDoJSONData from '../jsonFiles/toDoData';


export const ToDoContext = React.createContext();

export const ToDoProvider = (props) => {

    const [toDoItems, setToDOItems] = useState([...toDoJSONData]);

    // add todo item to the list
    const addToDoItemHandler = (newTaskTitle, newTaskDescription) => {
        setToDOItems([
            ...toDoItems,
            {
                taskTitle: newTaskTitle,
                taskDescription: newTaskDescription,
                completed: false
            }
        ]);
    }

    // change status to complete of the todoItem from list 
    const checkToDoItemHandler = (completeTaskTitle) => {

        const todoItemsCopy = [...toDoItems];
        let completedItemIndex = todoItemsCopy.findIndex((toDoItem) =>
            toDoItem.taskTitle === completeTaskTitle);
        console.log("object completed index", completedItemIndex);
        console.log("object completed ", todoItemsCopy[completedItemIndex]);
        setToDOItems([...todoItemsCopy], todoItemsCopy[completedItemIndex].completed = true);

    }
    // remove todoItem from The List
    const removeToDoItemHandler = (removedTaskTitle) => {
        const todoItemsCopy = [...toDoItems];
        const todoItemsUpdated = todoItemsCopy.filter((toDoItem) => {
            return toDoItem.taskTitle !== removedTaskTitle;
        });
        console.log(todoItemsUpdated, 'list after deleting the item');

        setToDOItems([...todoItemsUpdated]);
    }

    return (
        <ToDoContext.Provider
            value={{
                toDoItems: toDoItems,
                setToDOItems: setToDOItems,
                addToDoItemHandler: addToDoItemHandler,
                checkToDoItemHandler: checkToDoItemHandler,
                removeToDoItemHandler: removeToDoItemHandler
            }}>
            {props.children}
        </ToDoContext.Provider>
    )
}