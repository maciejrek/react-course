import React from 'react'


const TodoItem = (props) => (
        <div className="todo-item">
            <input type="checkbox" onChange={()=>{console.log("Changed")}} checked={props.completed}/>
            <p> {props.text}</p> 
        </div>
    )
export default TodoItem