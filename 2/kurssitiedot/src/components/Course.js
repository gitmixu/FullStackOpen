const Course = ({ course }) => {
    console.log('\ncomponents > Course called')
    console.log('course',course)
    return (
      <h1>{course.name}</h1>
    )
  }

export default Course