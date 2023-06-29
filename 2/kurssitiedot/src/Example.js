import Note from './components/Note'

const Example = ({ notes }) => {
  console.log('\nExample works...')
  console.log('notes',notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(note =>
      <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default Example