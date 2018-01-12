import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World, I'm a React App </h1> 
        <p>This is working</p>
        <Person name="Tom" age="33"/>
        <Person name="Chels" age="32">My Hobbies: Baby Growing</Person>
        <Person name="Desmond" age="6"/>
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
