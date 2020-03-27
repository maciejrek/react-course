import React from "react";
import "../style.css";
import TodoItem from "./TodoItem";
import todoData from './todoData'


const App = () => {
  const todoComponents = todoData.map(todo => (
   <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
  ))

  return <div className="todo-list">{todoComponents}</div>

}
//   <div>
//     <div className="todo-list">
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//     </div>
//   </div>
// );
export default App;
