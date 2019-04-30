import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos : [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'learn react'}
    ]
  }

  delete = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos })
    console.log("todo deleted: "+ id);
  }

  add = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">TODO LIST</h1>
        <AddTodo addMethod={ this.add } />
        <Todos todos={this.state.todos} deleteMethod={ this.delete } />
      </div>
    );
  }
}

export default App;
