import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Tom", age: 33 },
      { name: "Chels", age: 32 },
      { name: "Desmond", age: 6 }
    ],
    otherState: 'some other value'
  }

switchNameHandler = (newName) => {
  // console.log('button clicked');
  // DON'T DO THIS: this.state.persons[0].name = "Thomas";
  this.setState({persons: [
    { name: newName, age: 33 },
    { name: "Chels", age: 32 },
    { name: "Desmond", age: 50 }
  ]
})
}

nameChangedHandler = (event) => {
  this.setState({persons: [
    { name: 'Tom', age: 33 },
    { name: event.target.value, age: 32 },
    { name: "Desmond", age: 50 }
  ]
})
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello World, I'm a React App </h1> 
        <p>This is working</p>
        <button style={style} onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Baby Makin
        </Person>
        <Person 
        name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Timmy!')}
        changed={this.nameChangedHandler}>My Hobbies: Baby Growin
        </Person>
        <Person 
        name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Baby Sniffin
        </Person>
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
