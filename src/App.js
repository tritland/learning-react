import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Tom", age: 33 },
      { name: "Chels", age: 32 },
      { name: "Desmond", age: 6 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World, I'm a React App </h1> 
        <p>This is working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Baby Makin</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Baby Growing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Baby Sniffin</Person>
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
