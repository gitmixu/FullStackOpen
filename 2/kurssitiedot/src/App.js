import './App.css';

const Header = ({ name }) => { 
  console.log('\nHeader works')
  console.log(name)
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ part }) => { 
  console.log('\nContent works')
  console.log(part)
  return (
    <li>{part.name} {part.exercises}</li>
  )
}

const Course = ({ course }) => {
  console.log('\nCourse works')
  console.log(course)
  return (
    <div>
      <Header name={course.name} />
    <ul>
      {course.parts.map(part => 
        <Content key={part.id} part={part} />
      )}
    </ul>
    </div>
  )
}

const App = ({course}) => {
  console.log('\nApp works...')

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App