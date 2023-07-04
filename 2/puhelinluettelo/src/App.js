import { useState, useEffect } from 'react'
import numberService from './services/numbers'
import './App.css'

const Numbers = ({ person, filter }) => {
  if ((person.name).toLowerCase().includes(filter.toLowerCase())){
      console.log('Numbers > filter =', filter);
      console.log('\nApp > Numbers > person',person);
    return ( 
    <li>{'> '}{person.name} {person.number} <button onClick={() => {
      if (window.confirm(`Delete ${person.name}`)){
        numberService
          .remove(person.id)
          .then(console.log('deleted number', person)); window.location.reload();}}}
      >delete</button></li> );
  }
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    
    if(persons.find(person => person.name === newName)){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
      const findPerson = persons.find(person => person.name === newName);
      const personObject = { name: newName, number: newNumber }
      numberService.update(findPerson.id, personObject);
      }
      setNewName('')
      setNewNumber('')
      window.location.reload();
      return;
    }

    const personObject = { name: newName, number: newNumber }

    numberService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handlePersonChange = (event) => { event.preventDefault(); setNewName(event.target.value); }
  const handleNumberChange = (event) => { event.preventDefault(); setNewNumber(event.target.value); }
  const handleFilterChange = (event) => { event.preventDefault(); setNewFilter(event.target.value); }

  console.log('\nApp > persons', persons);
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
        {persons.map(person => <Numbers key={person.name} person={person} filter={newFilter}/>)}
      </ul>
    </div>
  );

}

export default App;