import React, { Component } from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Buy kukumba from the market",
      },
      {
        id: 2,
        content: "Order gloceries from the store",
      },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random(); //not the most accurate, i could use randomly generated numbers from database
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Daily Todo's Application</h1>
        <h2 className='center blue-text'>By Mere Daniel</h2>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
