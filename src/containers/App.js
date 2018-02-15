import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] inside constructor', props);
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()')
  }

componentDidMount(){
  console.log('[App.js] Inside componentDidMount()')
}

// shouldComponentUpdate(nextProps, nextState){
//   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
//   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
// }

componentWillUpdate(nextProps, nextState){
  console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
}

componentDidUpdate(){
  console.log('[UPDATE App.js] Inside componentDidUpdate');
}

  state = {
    persons: [
      { id: 1, name: "Tom", age: 33 },
      { id: 2, name: "Chels", age: 32 },
      { id: 3, name: "Desmond", age: 6 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.slice(); or use the more moder ES6 spread operator below
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] inside render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App; 