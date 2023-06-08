const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content names={parts}/>
      <Total exercises={parts}/>
    </div>
  )
}
export default App


const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.names.forEach(element => {
        console.log(element.name);
        <p>{element.name}</p>
      })}
    </div>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <div>
        {props.exercises.forEach(element => {
          console.log(element.exercises);
          <p>{element.exercises}</p>
      })}
    </div>
  )
}