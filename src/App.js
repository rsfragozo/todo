import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos : [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'learn react'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">TODO LIST</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
