import { useState } from 'react'
import Note from './components/Note'

const Example = (props) => {
  console.log('\nExample works...')

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true) //lisätään tila joka halutaan näyttää
  console.log('notes',notes)

  const notesToShow = showAll /* luo näytettävien muistiinpanojen listan riippuen siitä, tuleeko näyttää kaikki vai vain tärkeät: */
  ? notes
  : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = { /*uutta muistiinpanoa vastaava olio*/
      content: newNote, /*sisältökentän arvo saadaan komponentin tilasta newNote*/
      important: Math.random() > 0.5, /*muistiinpanosta tulee 50 %:n todennäköisyydellä tärkeä.*/
      id: notes.length + 1,/*Yksikäsitteinen tunnus eli id generoidaan kaikkien muistiinpanojen lukumäärän perusteella*/
    }
  
    setNotes(notes.concat(noteObject)) /*Uusi muistiinpano lisätään vanhojen joukkoon oikeaoppisesti käyttämällä osasta 1 tuttua taulukon metodia concat:*/
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>  
      <ul> {notesToShow.map(note =>
      <Note key={note.id} note={note} /> )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default Example