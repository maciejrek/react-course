import React, { Component } from "react";
import "../style.css";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: todoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /* 
  map() method creates a new array with the results of 
  calling a function for every array element. 
  */
  handleChange(id) {
    this.setState(prevState => {
      /* 
      Create new array where for each element in prevState.todo 
      new todo will be created 
      */
      const updatedTodo = prevState.todo.map(todo => {
        /* 
        if todo.id === id,
        change .completed value, else return old todo 
        */
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      /* change todo to updated array */
      return { todo: updatedTodo };
    });
  }

  render() {
    const todoComponents = this.state.todo.map(item => (
      <TodoItem key={item.id} handleChange={this.handleChange} item={item} />
    ));
    return <div className="todo-list">{todoComponents}</div>;
  }
}
export default App;
