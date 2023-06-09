const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content names={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}
export default App


const Header = (props) => {
  console.log(props)
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
      <p>{props.names[0].name}</p>
      <p>{props.names[1].name}</p>
      <p>{props.names[2].name}</p>
    </div>
  )
}

const Total = (props) => {
  let totalNum = 0;
  console.log(props);
  return (
    <div>
        {props.exercises.forEach(element => {
          totalNum += element.exercises;
      })}
    <p>{totalNum}</p>
    </div>
  )
}