import React from 'react'

const textToPrint = 'Placeholder text'

const TodoItem = () => (
        <div className="todo-item">
            <input type="checkbox"/>
            <p> {textToPrint}</p> 
        </div>
    )
export default TodoItem