import { useState } from 'react';
import './App.css';

const Numbers = ({ person }) => {
  console.log('\nApp > Numbers > person',person);
  return (
    <li>{person.name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  console.log('\nApp > persons', persons);

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName
    }
    console.log('\nApp > addName >',personObject);

    setPersons(persons.concat(personObject));
    setNewName('');
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
    /*console.log('\nApp > handlePersonChange >', event.target.value);*/
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul> {persons.map(person =>
      <Numbers key={person.name} person={person} /> )}
      </ul>
    </div>
  );

}

export default App;
