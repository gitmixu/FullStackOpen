/* Komponentti Hello myös tulostaa props-olion arvon konsoliin. */
const Hello = (props) => {
  console.log(props)
  const friends = [
    { name: 'Leevi', age: 36 },
    { name: 'Venla', age: 20 }
  ]
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>{friends[0].name}</p>
    </div>
  )
}
/* Komponentti App lähettää propseina muuttujan arvoja, 
summalausekkeen evaluoinnin tuloksen ja normaalin merkkijonon. */
const App = () => {
  const nimi = "Pekka"
  const ika = 20

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="mixu" age={3+20} />
      <Hello name={nimi} age={ika}/>
      <p></p>
    </div>
  )
}

/*
Tiedosto App.js määrittelee nyt React-komponentin nimeltään App. 
Tiedoston index.js viimeisen rivin komento 
*/
export default App