import { useState } from 'react';
import './App.css';

const Numbers = ({ person }) => {
  console.log('\nApp > Numbers > person',person);
  return ( <li>{'> '}{person.name} {person.number}</li> );
}

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1231244'}]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  console.log('\nApp > persons', persons);

  const addName = (event) => { event.preventDefault();
    console.log('\nApp > addName');

    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
      return
    }

    const personObject = { name: newName, number: newNumber }
    setPersons(persons.concat(personObject));

    setNewName('');
    setNewNumber('');
  }

  const handlePersonChange = (event) => { event.preventDefault(); setNewName(event.target.value); }
  const handleNumberChange = (event) => { event.preventDefault(); setNewNumber(event.target.value); }

  return (
    <div id='content'>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit" >add</button></div>
      </form>

      <h2>Numbers</h2>
      <ul> 
        {persons.map(person => <Numbers key={person.name} person={person} /> )}
      </ul>
    </div>
  );

}

export default App;