const Note = ({ note }) => {
    console.log('\ncomponents > Note called')
    return (
      <li>{note.content}</li>
    )
  }
  
export default Note