import { useState } from 'react'
import './App.css';

const ary = new Uint8Array(8);
const copy = [...ary]

const MostVotes = (props) => {
  const numbers = props.list
  const anecdotes = props.anecdotes
  const max_index = numbers.indexOf(Math.max(...numbers));
  if (copy[max_index] === 0){
    return (
      <>
      <p>no votes yet</p>
      </>
    )
  }
  return (
    <>
    {anecdotes[max_index]}
    <p>has {numbers[max_index]} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('');
    console.log('VOTING');
    copy[selected] += 1;
    setCounter(copy[selected]);
    }

  const nextAnecdote = () => {
    console.log('');
    console.log('NEXT ANECDOTE');
    setSelected(Math.floor(Math.random() * ((anecdotes.length - 1) - 0 + 1)) + 0);
    setCounter(copy[selected]);
  }

  return (
      <div>
        <h1>Anecdote of the day</h1>
        {console.log(copy)}
        <p>{anecdotes[selected]}{console.log('selected anecdote',selected)}</p>
        <div>has {copy[selected]} votes {console.log('votes',copy[selected])}</div>
        <button onClick={handleClick}>vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
        <h1>Anecdote with most votes</h1>
        <MostVotes list={copy} anecdotes={anecdotes}/>
      </div>
    )
  }

export default App