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
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Tom', age: 33 },
        { name: event.target.value, age: 32 },
        { name: "Desmond", age: 50 }
      ]
    })
  }

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
          return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
      })}
  </div> 
  );
}

    return (
      <div className="App">
        <h1>Hello World, I'm a React App </h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}       
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
