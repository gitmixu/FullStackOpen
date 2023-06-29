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

const Total = ({ parts }) => { 
  console.log('\nTotal works');
  console.log(parts);
  let exs = [];
  parts.map(part => exs.push(part.exercises));
  let sum = exs.reduce((acc, curr) => acc+curr, 0);
  return (
    <>
    <h3>total of {sum} exercises</h3>
    </>
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
      <Total parts={course.parts} />
    </div>
  )
}

const App = ({courses}) => {
  console.log('\nApp works...');
  console.log(courses);

  return (
    <div>
      {courses.map(course => 
      <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default App