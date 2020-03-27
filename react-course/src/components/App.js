import React,{Component} from "react";
import "../style.css";
import TodoItem from "./TodoItem";
import todoData from './todoData'


class App extends Component {
  constructor(){
    super()
    this.state={
      todo:todoData
    }
  }
  render()
  {
    const todoComponents = this.state.todo.map(todo => (
      <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
     ))
     return <div className="todo-list">{todoComponents}</div>
  }
}
export default App;
