import React, { useState, useContext } from 'react';
import { ToDoContext } from '../context_providers/TodoContext'

const InputForm = (props) => {

    const contextValues = useContext(ToDoContext);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        contextValues.addToDoItemHandler(newTaskTitle, newTaskDescription);
        setNewTaskTitle('');
        setNewTaskDescription('');
    }

    return (
        <form className='to-do-form'
            onSubmit={submitHandler}>
            <div className='form-control'>
                <label>Task Title</label>
                <input type="text"
                    name="title "
                    autoComplete="off"
                    value={newTaskTitle}
                    onChange={(event) => setNewTaskTitle(event.target.value)} />
            </div>
            <div className='form-control'>
                <label>Task Description</label>
                <input type="text"
                    name="description"
                    autoComplete="off"
                    value={newTaskDescription}
                    onChange={(event) => setNewTaskDescription(event.target.value)} />
            </div>
            <button>Add Task</button>
        </form >
    );
}

export default InputForm;