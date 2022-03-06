import React from 'react'

const ToDo = (props) => {
    let status = (
        <>
            <h4 className="pending-item">Pending</h4>
            <span className="checked-icon" onClick={props.done}>&#9745;</span>
        </>
    )
    if (props.task.completed) {
        status = <h4 className="checked-item">completed &#9745;</h4>
    }
    return (
        <div className="List">
            <h4>{props.task.taskTitle}</h4>
            <p>{props.task.taskDescription}</p>
            {status}
            <span className="close-icon" onClick={props.closed}>&#10006;</span>
        </div>
    );

}

export default ToDo