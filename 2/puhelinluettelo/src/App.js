import { useState } from 'react';
import './App.css';

const Numbers = ({ person, filter }) => {
  if (filter === ''){
      console.log('Numbers > filter = empty'); 
    return ( <li>{'> '}{person.name} {person.number}</li> );}
  else if ((person.name).toLowerCase().includes(filter.toLowerCase())){
      console.log('Numbers > filter =', filter);
      console.log('\nApp > Numbers > person',person);
    return ( <li>{'> '}{person.name} {person.number}</li> );
  }
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

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
  const handleFilterChange = (event) => { event.preventDefault(); setNewFilter(event.target.value); }

  return (
    <div id='content'>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={newFilter} onChange={handleFilterChange}/> </div>

      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit" >add</button></div>
      </form>

      <h2>Numbers</h2>
      <ul> 
        {persons.map(person => <Numbers key={person.name} person={person} filter={newFilter}/> )}
      </ul>
    </div>
  );

}

export default App;