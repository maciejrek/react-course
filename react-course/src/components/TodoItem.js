import React from "react";

const TodoItem = props => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => props.handleChange(props.item.id)}
        checked={props.item.completed}
      />
      {/* {props.item.completed?<strike><p> {props.item.text}</p></strike>:<p> {props.item.text}</p>} */}
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
};
export default TodoItem;
